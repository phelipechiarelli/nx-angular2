import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IListPeopleState, listPeopleAction, loadListPeopleAction } from './../../../../../store/lista-container/list-people.state';

interface PageEvent {
  first: number;
  rows: number;
  page: number; 
  pageCount: number;  
}

@Component({
  selector: 'nx-angular2-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css'],
})
export class ListaContainerComponent {

  lista: any
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 0;  
  pageString: any;
  pageNumber: number = 1;
  loading: boolean = true;  
  

  constructor(private store: Store<{listPeopleInitialState: IListPeopleState}>){      
    
  }

  dados$ = this.store.select('listPeopleInitialState').pipe(
    map(res => res.listPeople)
  )

  totalItens$ = this.store.select('listPeopleInitialState').pipe(
    map(res => res.listCount)
  )
  
  ngOnInit(){    
    this.store.dispatch(loadListPeopleAction({page: 1}))
    this.loading = this.dados$ ? false : true;
    
    console.log('this.loading',this.loading)
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageNumber = event.page == 0 ? 1 : event.page + 1 ;    
    this.pageString = `?page=${this.pageNumber}`    
    console.log('event', event)    
  }

  
}
