import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UDApiService} from 'src/services/ud-api.service';
import { IUDResponse } from 'src/app/interfaces/UDResponse';

import {Word} from "src/app/word.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UDApiService]
})
export class AppComponent {
}
