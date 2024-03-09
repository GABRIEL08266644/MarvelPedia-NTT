import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CharactersListComponent } from "./pages/characters-list/characters-list.component";
import { CharacterDetailsComponent } from "./pages/character-details/character-details.component";
import { ComicsDetailsComponent } from "./pages/comics-details/comics-details.component";

const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'characters-list', component: CharactersListComponent },
    { path: 'character-details/:id', component: CharacterDetailsComponent },
    { path: 'comic-details/:id', component: ComicsDetailsComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}