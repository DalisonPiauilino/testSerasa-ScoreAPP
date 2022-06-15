import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Score } from 'src/app/models/Score';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  p: number = 1;
  scores: Score[];
  hideWhenNoScore: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public scoreService: ScoreService,
    public toastr: ToastrService,
    private router: Router
  ){
    this.scoreService.getAll().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.scores = [];
        this.hideWhenNoScore = false;
        this.noData = true;
      } else {
        console.log(data);
        this.scores = data;
        this.hideWhenNoScore = true;
        this.noData = false;
      }
    });
  }

  ngOnInit(): void {
  }

  editScore(score: Score) {
    this.router.navigate([this.router.url, score.id]);
  }

}
