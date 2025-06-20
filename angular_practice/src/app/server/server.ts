import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
  imports: [],
  templateUrl: './server.html',
  styleUrl: './server.css',
  standalone: true
})
export class Server {
  serverId: number = 10;
  serverStatus: string = "offline";
  

}
