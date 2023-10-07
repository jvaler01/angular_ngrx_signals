import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeScore, awayScore, resetScore, setScores } from 'src/app/state/actions/score.actions';
import { Game } from '../../state/models/game.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  score$: Observable<any>;

  constructor(private store: Store<{ game: Game }>) {
    this.score$ = store.select('game');
  }

  increment() {
    this.store.dispatch(homeScore());
  }

  decrement() {
    this.store.dispatch(awayScore());
  }

  reset() {
    this.store.dispatch(resetScore());
  }

  setScores(){
    this.store.dispatch(setScores({game: {home: 1, away: 1}}));
  }
}
