import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Afinidade } from 'src/app/models/Afinidade';
import { AfinidadeService } from 'src/app/services/afinidade/afinidade.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-afinidade-form',
  templateUrl: './afinidade-form.component.html',
  styleUrls: ['./afinidade-form.component.scss']
})
export class AfinidadeFormComponent implements OnInit {

  public afinidadeForm: FormGroup;

  id: number;
  editForm: boolean = false;

  estados = ['AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO'];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private afinidadeService: AfinidadeService,
    public toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    this.afinidadeForm = this.fb.group({
      regiao: ['', [Validators.required]],
      estados: ['', [Validators.required]],
    });
    console.log(this.activatedRoute.snapshot);
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
    if(this.id) {
      this.editForm = true;

      this.afinidadeService.getById(this.id).subscribe((data: Afinidade) => {
        if (data === null) {
          this.router.navigate(['error']);
          throw new Error('Not Found');
        }

        this.afinidadeForm.patchValue({
          regiao: data.regiao,
          estados: data.estados
        });
      });
    }
  }

  get af() { return this.afinidadeForm.controls; }

  onSubmit() {

    console.log(this.afinidadeForm.value);

    this.afinidadeService.create(this.afinidadeForm.value).subscribe(res => {
      this.toastr.success(
        'successfully added!'
      );
      this.afinidadeForm.reset();
      this.router.navigate(['afinidades']);
    });

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
