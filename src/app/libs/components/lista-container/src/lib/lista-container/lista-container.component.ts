import { ListaServiceService } from './../../../../../data-access/lista-service/lista-service.service';
import { Component } from '@angular/core';


interface PageEvent {
  first: number;
  rows: number;
  page: number;  
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

  constructor(private listaservice: ListaServiceService){  
  }
  
  ngOnInit(){          
    this.pageString = `?page=${this.pageNumber}`    
    this.getListResults(this.pageString);
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageNumber = (this.first / 10) == 0 ? 1 : (this.first / 10) + 1 ;    
    this.pageString = `?page=${this.pageNumber}`    
    this.getListResults(this.pageString);
    console.log('this.loading.onPageChange',this.loading)
  }

  getListResults(page: any){
    console.log('this.loading.getListResults',this.loading)
    this.loading = true;
    this.listaservice.getPersonList(page).subscribe(res =>{
      this.lista = res.results;
      this.totalRecords = res.count;
      this.loading = false;    
      console.log('this.loading.getListResults',this.loading)
    })
  }
}
