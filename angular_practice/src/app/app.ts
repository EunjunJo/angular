import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Server } from './server/server';
import { Servers } from './servers/servers';
import { WarningAlertComponent } from './warning-alert/WarningAlertComponent';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Server, Servers, CommonModule, WarningAlertComponent, SuccessAlertComponent],
  templateUrl: './app.html',
  // styleUrl: './app.css'
  styles: [`h3 {
    color:dodgerblue;
    }`]

})
export class App {  
  protected name = 'angular practice example';
}
