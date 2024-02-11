import { Component } from '@angular/core';
import { UsersdataService } from './services/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17_without_standalone';
  users:any;
  constructor(private userData:UsersdataService)
  {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    })
  }
}
