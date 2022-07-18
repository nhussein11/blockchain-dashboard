import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favs-details',
  templateUrl: './favs-details.component.html',
  styleUrls: ['./favs-details.component.css']
})
export class FavsDetailsComponent implements OnInit {

  data:any[] = ['a','b','c', 'd']

  constructor() { }

  ngOnInit(): void {
  }

}
