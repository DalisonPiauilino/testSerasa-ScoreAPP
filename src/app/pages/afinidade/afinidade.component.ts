import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Afinidade } from 'src/app/models/Afinidade';
import { AfinidadeService } from 'src/app/services/afinidade/afinidade.service';


@Component({
  selector: 'app-afinidade',
  templateUrl: './afinidade.component.html',
  styleUrls: ['./afinidade.component.scss']
})
export class AfinidadeComponent implements OnInit {

  p: number = 1;
  afinidades: Afinidade[];
  hideWhenNoAfinidade: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public afinidadeService: AfinidadeService,
    public toastr: ToastrService,
    private router: Router
  ) {
    this.afinidadeService.getAll().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.afinidades = [];
        this.hideWhenNoAfinidade = false;
        this.noData = true;
      } else {
        console.log(data);
        this.afinidades = data;
        this.hideWhenNoAfinidade = true;
        this.noData = false;
      }
    });
  }

  ngOnInit(): void {
  }

  editAfinidade(afinidade: Afinidade) {
    console.log(afinidade);
    this.router.navigate([this.router.url + `/${afinidade.id}`]);
    // this.afinidadeService.update(afinidade.id, afinidade).subscribe(res => {
    //   console.log(res);
    // });
    // this.toastr.success(afinidade.nome + ' successfully edited!');
  }

}
