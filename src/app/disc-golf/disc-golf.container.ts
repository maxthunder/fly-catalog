import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {DiscGolfListComponent} from "./components/disc-golf-list/disc-golf-list.component";

@Component({
  selector: 'app-disc-golf',
  imports: [
    DiscGolfListComponent,
    MatToolbar,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './disc-golf.container.html',
  standalone: true,
  styleUrls: ['./disc-golf.container.css']
})
export class DiscGolfContainer {

}
