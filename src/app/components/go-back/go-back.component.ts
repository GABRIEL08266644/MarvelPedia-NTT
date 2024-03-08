import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.sass']
})
export class GoBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
