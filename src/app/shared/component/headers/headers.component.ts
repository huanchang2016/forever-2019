import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  public name:string = '';
  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log(this.name);
  }

}
