import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { CharactersListComponent } from "./components/characters-list/characters-list.component";
import { CharacterDetailsComponent } from "./components/character-details/character-details.component";

const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'characters-list', component: CharactersListComponent },
    { path: 'character-details/:id', component: CharacterDetailsComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}