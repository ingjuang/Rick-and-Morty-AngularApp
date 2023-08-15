import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import { MENU_ITEMS } from 'src/app/shared/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NbMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items = MENU_ITEMS;

}
