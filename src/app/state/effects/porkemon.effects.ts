import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { PokemonService } from '../../services/pokemon.service';
import * as PokemonPageActions from '../actions/pokemon.actions';

export const initPokemon = createEffect(
  (actions$ = inject(Actions), pokemonService = inject(PokemonService)) => {
    return actions$.pipe(
      ofType(PokemonPageActions.setPokemonAction),
      exhaustMap(() =>
      pokemonService.getPokemon(1).pipe(
          map((pokemon) => PokemonPageActions.setPokemon({ id: pokemon.id, pokemon: pokemon })),
          /* catchError((error: { message: string }) =>
            of(PokemonPageActions.actorsLoadedFailure({ errorMsg: error.message }))
          ) */
        )
      )
    );
  },
  { functional: true }
);

export const loadPokemon = createEffect(
  (actions$ = inject(Actions), pokemonService = inject(PokemonService)) => {
    return actions$.pipe(
      ofType(PokemonPageActions.nextPokemonAction),
      exhaustMap((action) =>
      pokemonService.getPokemon(action.id+1).pipe(
          map((pokemon) => PokemonPageActions.nextPokemon({ id: pokemon.id, pokemon: pokemon })),
          /* catchError((error: { message: string }) =>
            of(PokemonPageActions.actorsLoadedFailure({ errorMsg: error.message }))
          ) */
        )
      )
    );
  },
  { functional: true }
);
/* export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(ActorsApiActions.actorsLoadedFailure),
      tap(({ errorMsg }) => alert(errorMsg))
    );
  },
  { functional: true, dispatch: false }
); */
