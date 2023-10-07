import { createAction, props } from '@ngrx/store';
import { Pokemon } from './../models/pokemon.model';

export const nextPokemonAction = createAction('[Pokemon Page] Next Pokemon', props<{id: number}>());
export const nextPokemon = createAction('[Pokemon Page] Next Pokemon', props<{id: number, pokemon: Pokemon}>());

export const prevPokemonAction = createAction('[Pokemon Page] Next Pokemon', props<{id: number}>());
export const prevPokemon = createAction('[Pokemon Page] Next Pokemon', props<{id: number, pokemon: Pokemon}>());

export const resetPokemon = createAction('[Pokemon Page] Pokemon Reset');

export const setPokemonAction = createAction('[Pokemon Page] Set Pokemon');
export const setPokemon = createAction('[Pokemon Page] Set Pokemon', props<{id: number, pokemon: Pokemon}>());
