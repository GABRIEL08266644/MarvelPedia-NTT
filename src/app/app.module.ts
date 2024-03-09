import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { DetailsListComponent } from './components/details-list/details-list.component';
import { ComicsDetailsComponent } from './pages/comics-details/comics-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharactersListComponent,
    CharacterDetailsComponent,
    LoadingComponent,
    FooterComponent,
    GoBackComponent,
    DetailsListComponent,
    ComicsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
