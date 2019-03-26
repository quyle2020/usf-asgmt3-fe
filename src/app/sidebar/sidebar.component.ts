import { Component, OnInit } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
@Component({
  selector: 'app-about',
  templateUrl: '../about.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
