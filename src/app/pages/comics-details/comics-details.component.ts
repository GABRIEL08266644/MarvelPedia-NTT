import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService } from 'src/app/services/character.service';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.sass']
})
export class ComicsDetailsComponent implements OnInit {
  isExpandedImage: boolean = false;
  comicId: number = 0;
  comic: any[0];

  comicImage: string = "";
  comicTitle: string = "";
  comicDescription: string = "";

  loadingData: boolean = false;

  comics: any[] = [];

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.comicId = +params['id'];
      this.getcomicDetailsById();
    });
  }

  getcomicDetailsById(): void {
    this.loadingData = true; 

    this.comicService.getComicById(this.comicId)
    .subscribe((comicDetais) => {
      const comic = comicDetais.data.results[0];
      this.comicImage = comic.thumbnail.path + '.' + comic.thumbnail.extension;
      this.comicTitle = comic.title;

      if(comic.description !== "") 
        this.comicDescription = comic.description;
      else 
        this.comicDescription = "Description not found";

      this.loadingData = false; 
    });
  }

  expandImage(): void {
    this.isExpandedImage = true;
  }

  closeExpandedImage(): void {
    this.isExpandedImage = false;
  }

  goBack(): void {
    this.location.back();
  }
}
