import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.sass']
})
export class DetailsListComponent implements OnInit {
  @Input() characterId: number = 0;
  @Input() comicId: number = 0;

  itemTitle: string = '';
  itemThumbnail: string = '';
  title: string = 'Comics';
  url: string = '';
  
  itens: any[] = [];

  constructor(
    private comicService: ComicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.characterId != 0) {
      this.title = "Comics"
      this.url = "/comic-details"
      this.getComicsByCharacterId()
    } else {
      this.title = "Characters"
      this.url = "/character-details"
      this.getCharactersByComicId()
    }
  }

  getComicsByCharacterId() {
    this.comicService.getComicsByCharacterId(this.characterId)
    .subscribe((comicsList) => {
      this.itens = comicsList.data.results;
    });
  }

  getCharactersByComicId() {
    this.comicService.getCharactersByComicId(this.comicId)
    .subscribe((charactersList) => {
      this.itens = charactersList.data.results;
    });
  }

  showDetails(comic: any) {
      this.router.navigate([this.url, comic.id]);
  }
}
