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
  currentPage: number = 1;
  totalPages: number = 1;
  
  selectedCharacterId: number = 0;
  characters: any[] = [];
  
  totalItems: number = 0;
  itemsPerPage: number = 12;
  itemsPerPageOptions: number[] = [6, 12, 24, 48, 96];

  loadingData: boolean = false;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSavePageLocalStorage();
    this.getCharacters();
  }

  getCharacters(): void {
    this.loadingData = true; 
    
    this.characterService.getCharacters(this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        this.characters = response.data.results;
        this.totalItems = response.data.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.loadingData = false;
      });
  }

  getSavePageLocalStorage() {
    const itemsPerPageString = localStorage.getItem('itemsPerPage');
    const currentPageString = localStorage.getItem('currentPage');
    
    if (itemsPerPageString !== null) {
      this.itemsPerPage = parseInt(itemsPerPageString, 10);
    }
    
    if (currentPageString !== null) {
      this.currentPage = parseInt(currentPageString, 10);
    }
  }

  showDetails(character: any) {
    this.router.navigate(['/character-details', character.id]);
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters();
    }

    this.savePage()
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }

    this.savePage()
  }

  changeItemsPerPage(): void {
    this.savePage()
    this.getCharacters();
  }

  changePage(pageNumber: number): void {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.getCharacters();
    }

    this.savePage()
  }

  savePage() {
    localStorage.setItem('itemsPerPage', this.itemsPerPage.toString());
    localStorage.setItem('currentPage', this.currentPage.toString());
  }

  applyFilter(): void {
    this.loadingData = true;

    this.characterService.getCharacterDetailsById(this.selectedCharacterId)
      .subscribe(response => {
        this.characters = response.data.results;
        this.totalItems = response.data.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.loadingData = false;
      });
  }

  resetFilter(): void {
    this.selectedCharacterId = 0;
    localStorage.setItem('itemsPerPage', '12');
    localStorage.setItem('currentPage', '1');

    this.getSavePageLocalStorage();
    this.getCharacters();
  }

  goBack(): void {
    this.location.back();
  }
}
