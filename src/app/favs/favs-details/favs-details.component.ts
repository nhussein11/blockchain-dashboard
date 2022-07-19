import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favs-details',
  templateUrl: './favs-details.component.html',
  styleUrls: ['./favs-details.component.css']
})
export class FavsDetailsComponent implements OnInit {

  @Input() data:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
