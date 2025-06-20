import { Component } from '@angular/core';
import { Server } from '../server/server';

@Component({
  selector: 'app-servers',
  imports: [Server],
  templateUrl: './servers.html',
  styleUrl: './servers.css',
  standalone: true
})
export class Servers {

}
