import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.sass']
})
export class CharacterDetailsComponent implements OnInit {
  isExpandedImage: boolean = false;
  characterId: number = 0;
  character: any[0];

  characterImage: string = "";
  characterTitle: string = "";
  characterDescription: string = "";

  loadingData: boolean = false;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = +params['id'];
      this.getCharacterDetailsById();
    });
  }

  getCharacterDetailsById(): void {
    this.loadingData = true; 

    this.characterService.getCharacterDetailsById(this.characterId)
    .subscribe((characterDetais) => {
      const character = characterDetais.data.results[0];
      this.characterImage = character.thumbnail.path + '.' + character.thumbnail.extension;
      this.characterTitle = character.name;

      if(character.description !== "") 
        this.characterDescription = character.description;
      else 
        this.characterDescription = "Description not found";

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
