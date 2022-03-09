import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogonService } from '../../services/logon.service';

import { AppModule } from '../../app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.less']
})
export class LogonComponent implements OnInit {

  constructor(private readonly router: Router, private logonService: LogonService) { }

  ngOnInit(): void {
  }

  onLogon(): void {

    var data = this.logonService.getUser().subscribe((data: any) => {
      
      var body = document.getElementsByTagName("body")[0];
      body.innerHTML = "<app-root></app-root>";
      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
      //this.router.navigate(['landing']);
    });


  }

}
