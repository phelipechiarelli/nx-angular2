import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContainerComponent } from './lista-container/lista-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    ProgressSpinnerModule
    ],
  declarations: [ListaContainerComponent]  
})
export class SrcAppLibsComponentsListaContainerModule {}
