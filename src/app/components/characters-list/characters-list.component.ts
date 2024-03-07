import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass']
})
export class CharactersListComponent implements OnInit {
  selectedCharacterId: number = 0;
  filterValue: string = '';
  comics: any[0];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  itemsPerPageOptions: number[] = [6, 10, 24, 48];

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.characterService.getCharacters(this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        this.comics = response.data.results;
        this.totalItems = response.data.total;
      });
  }

  hoverCard(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
  }

  unhoverCard(event: MouseEvent) {
    (event.currentTarget as HTMLElement).style.transform = 'scale(1)';
  }

  showDetails(comic: any) {
    console.log(comic.id)
    this.router.navigate(['/character-details', comic.id]);
  }

  nextPage(): void {
    if ((this.currentPage * this.itemsPerPage) < this.totalItems) {
      this.currentPage++;
      this.getComics();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getComics();
    }
  }

  changeItemsPerPage(): void {
    this.currentPage = 1;
    this.getComics();
  }

  applyFilter(): void {
    console.log(this.selectedCharacterId)

    this.characterService.getCharacterDetailsById(this.selectedCharacterId)
    .subscribe(response => {
      this.comics = response.data.results;
      this.totalItems = response.data.total;
    });
  }

  resetFilter(): void {
    this.selectedCharacterId = 0;
    this.getComics();
  }
  
  goBack(): void {
    this.location.back();
  }
}
