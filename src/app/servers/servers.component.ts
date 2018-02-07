import { Component, OnInit } from '@angular/core';


//import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers', // element
  //selector: '[app-servers]', //attribute
  //selector: '.app-servers', //css
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`
    .textwhite {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  /* Assignment #2 */
  //userName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  //method
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus  = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event);
    //this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  /*Assignment 3*/
  toggled = false;
  toggledLog = [];

  toggleParagraph(){
    this.toggled = !this.toggled;
    this.toggledLog.push(new Date);
  }

}
