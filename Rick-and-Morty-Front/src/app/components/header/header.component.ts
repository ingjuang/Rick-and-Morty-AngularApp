import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NbIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  back(){
    history.back();
  }
}
