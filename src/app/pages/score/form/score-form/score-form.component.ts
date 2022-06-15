import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Score } from 'src/app/models/Score';
import { AfinidadeService } from 'src/app/services/afinidade/afinidade.service';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.scss']
})
export class ScoreFormComponent implements OnInit {

  public scoreForm: FormGroup;

  afinidades: any[];

  id: number;
  editForm: boolean = false;

  constructor(
    public fb: FormBuilder,
    public toastr: ToastrService,
    private afinidadeService: AfinidadeService,
    private scoreService: ScoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.afinidadeService.getAll().subscribe((data:any) => {
      this.afinidades = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
     this.scoreForm = this.fb.group({
      descricao: ['', [Validators.required]],
      scoreInicial: ['', [Validators.required]],
      scoreFinal: ['', [Validators.required]]
    });

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot);
    if(this.id) {
      this.editForm = true;

      this.scoreService.getById(this.id).subscribe((data: Score) => {
        if (data === null) {
          this.router.navigate(['error']);
          throw new Error('Not Found');
        }

        this.scoreForm.patchValue({
          descricao: data.descricao,
          scoreInicial: data.scoreInicial,
          scoreFinal: data.scoreFinal
        });
      });
    }
  }

  get sf() { return this.scoreForm.controls; }

  onSubmit() {

    console.log(this.scoreForm.value);

    this.scoreService.create(this.scoreForm.value).subscribe(res => {
      this.toastr.success(
        'successfully added!'
      );
      this.scoreForm.reset();
      this.router.navigate(['scores']);
    });

  }

}
