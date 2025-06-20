import { Component, OnInit } from '@angular/core';
import { Server } from '../server/server';

@Component({
  selector: 'app-servers',
  imports: [Server],
  templateUrl: './servers.html',
  styleUrls: ['./servers.css'],
  standalone: true,
})
export class Servers implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000);
  }

  ngOnInit(): void {}
}
