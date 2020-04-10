import { Component, OnInit } from '@angular/core';

// Services
import { SidebarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  containerActive = false;

  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void { }

}
