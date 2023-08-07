import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ListaContainerComponent } from './libs/components/lista-container/src/lib/lista-container/lista-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { listPeopleReducer } from './libs/store/lista-container/list-people.state';
import { ListPeopleEffectsService } from './libs/store/lista-container/list-people.effects.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ListaContainerComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    ProgressSpinnerModule,
    StoreModule.forRoot({ listPeopleInitialState: listPeopleReducer }),
    EffectsModule.forRoot([ ListPeopleEffectsService ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
