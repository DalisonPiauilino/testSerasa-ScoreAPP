import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from 'src/app/models/Pessoa';
import { AfinidadeService } from 'src/app/services/afinidade/afinidade.service';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  public pessoaForm: FormGroup;

  afinidades: any[];

  id: number;
  editForm: boolean = false;

  constructor(
    public fb: FormBuilder,
    public toastr: ToastrService,
    private afinidadeService: AfinidadeService,
    private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.afinidadeService.getAll().subscribe((data:any) => {
      this.afinidades = data;
      console.log(data);
    });
  }

  // nome, telefone, idade, cidade, estado, score e regiao

  ngOnInit(): void {
     this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      telefone: ['', [Validators.pattern('^[0-9]+$')]],
      idade: ['', [Validators.pattern('^[0-9]+$')]],
      cidade: [''],
      estado: [''],
      score: ['', [Validators.required]],
      regiao: [''],
      scoreDescricao: [''],
      estados: ['']
    });

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if(this.id) {
      this.editForm = true;

      this.pessoaService.getById(this.id).subscribe((data: Pessoa) => {
        if (data === null) {
          this.router.navigate(['error']);
          throw new Error('Not Found');
        }

        this.pessoaForm.patchValue({
          nome: data.nome,
          telefone: data.telefone,
          idade: data.idade,
          cidade: data.cidade,
          estado: data.estado,
          score: data.scoreDescricao,
          regiao: data.regiao,
          scoreDescricao: data.scoreDescricao,
          estados: data.estados
        });
      });
    }


  }

  get pf() { return this.pessoaForm.controls; }

  onSubmit() {

    console.log(this.pessoaForm.value);

    this.pessoaService.create(this.pessoaForm.value).subscribe(res => {
      this.toastr.success(
        'successfully added!'
      );
      this.pessoaForm.reset();
      this.router.navigate(['pessoas']);
    });

  }

}
