import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
    title : string = "Chrissy Schepker's Webpage";
  constructor() { }

  ngOnInit(): void {
  }

}
