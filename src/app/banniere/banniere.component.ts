import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.css']
})
export class BanniereComponent implements OnInit {
  title = ''

  constructor(){}

  ngOnInit() {
    this.title = 'Noice title'
  }
}