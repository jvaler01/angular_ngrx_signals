import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly _baseURL: string = 'https://api.coingecko.com/api/v3';
  private readonly _coins: any[] = [];
  private _pokemonData: any[] = [];

  constructor(private httpClient: HttpClient) {}

  get pokemonData(): any[] {
    return this._pokemonData;
  }

  getPokemon(id: any): Observable<any> {
    console.log(id);
    return this.httpClient
      .get<any[]>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      )
      .pipe(
        retry(2),
        map((data: any[]) => (this._pokemonData = data)),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
