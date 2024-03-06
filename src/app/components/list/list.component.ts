import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  comics: any[0];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  itemsPerPageOptions: number[] = [5, 10, 15, 20]; // Opções de itens por página



  constructor(private characterService: CharacterService) { }

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

}
