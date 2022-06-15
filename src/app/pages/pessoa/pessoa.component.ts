import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  p: number = 1;
  pessoas: Pessoa[];
  hideWhenNoPessoa: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public pessoaService: PessoaService,
    public toastr: ToastrService,
    private router: Router
  ){
    this.pessoaService.getAll().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.pessoas = [];
        this.hideWhenNoPessoa = false;
        this.noData = true;
      } else {
        console.log(data);
        this.pessoas = data;
        this.hideWhenNoPessoa = true;
        this.noData = false;
      }
    });
  }

  ngOnInit() {
  }

  editPessoa(pessoa: Pessoa) {
    console.log(pessoa);
    this.router.navigate([this.router.url + `/${pessoa.id}`]);
    // this.pessoaService.update(pessoa.id, pessoa).subscribe(res => {
    //   console.log(res);
    // });
    // this.toastr.success(pessoa.nome + ' successfully edited!');
  }

}
