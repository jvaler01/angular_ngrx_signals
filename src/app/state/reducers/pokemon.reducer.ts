import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as PokemonPageActions from '../actions/pokemon.actions';
import { Pokemon } from '../models/pokemon.model';

export interface PokemonState {
  id: number;
  pokemon: Pokemon;
};

export const initialState: PokemonState = {
  id: 0,
  pokemon: {
    name: '',
    sprites: '',
  }
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonPageActions.nextPokemon, (state, { id, pokemon }) => ({ ...state, id: id, pokemon: pokemon})),
  //on(PokemonPageActions.prevPokemon, state => ({ ...state, img: state.img })),
  on(PokemonPageActions.resetPokemon, state => ({ id: 0, pokemon: { name: '', sprites: '' } })),
  on(PokemonPageActions.setPokemon, (state, { id, pokemon }) => ({ id: id, pokemon: pokemon}))
);

// Creating selectors
export const getPokemonState = createFeatureSelector<PokemonState>('pokemonState');

export const getPokemon = createSelector(
  getPokemonState,
  (state: PokemonState) => state.pokemon
);
