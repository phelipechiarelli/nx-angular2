import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { IListPeopleState, listPeopleAction, listPeopleSuccess, loadListPeopleAction } from './list-people.state';
import { createEffect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class ListPeopleEffectsService {

  constructor(
    private actions$: Actions, // observable das actions criadas
    private http: HttpClient,
    private store: Store<{listPeopleInitialState: IListPeopleState}>) { }

  loadListPeople = createEffect( // criação do effect
    () => this.actions$.pipe( // pipe para executar uma ação dentro do observable de actions
      ofType(loadListPeopleAction), // definir o tipo de action que será chamada no effect
      switchMap(() =>  this.http.get(`https://swapi.dev/api/people`) // acessar o stream de dados provido pela api
      ),
      tap(data => this.store.dispatch(listPeopleAction({data})) // fazer o dispacth da respota da api para o state      
      ),
      map(() => listPeopleSuccess()) // mapear o sucesso do effect
    )
  )
}
