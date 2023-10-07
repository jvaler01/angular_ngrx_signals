import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/state/models/pokemon.model';
import { setPokemonAction, nextPokemonAction } from '../../state/actions/pokemon.actions';
import { PokemonState, getPokemon } from 'src/app/state/reducers/pokemon.reducer';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  pokemon$: Observable<any>;

  constructor(private store: Store<{ pokemon: Pokemon }>, private state: State<PokemonState>) {
    this.pokemon$ = store.select('pokemon');
  }

  start() {
    this.store.dispatch(setPokemonAction());
  }

  next() {
    const currentState = this.state.getValue().pokemon.id;
    this.store.dispatch(nextPokemonAction({id: currentState}));
  }
}
