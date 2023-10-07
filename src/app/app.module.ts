import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './state/reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { ScoreComponent } from './components/score/score.component';
import { scoreboardReducer } from './state/reducers/score.reducer';
import { pokemonReducer } from './state/reducers/pokemon.reducer';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import * as pokemonEffects from './state/effects/porkemon.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ScoreComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      game: scoreboardReducer,
      pokemon: pokemonReducer
    }, {}),
    EffectsModule.forRoot([
      pokemonEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
