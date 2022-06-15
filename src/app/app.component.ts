import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-score';

  constructor(
    private router: Router,
  ){

  }

  cadastrarPessoa(){
    this.router.navigate([location.origin + '/pessoas', 'cadastro']);
  }

  cadastrarAfinidade(){
    this.router.navigate([location.origin + '/afinidades', 'cadastro']);
  }

  cadastrarScore(){
    this.router.navigate([location.origin + '/scores', 'cadastro']);
  }
}
