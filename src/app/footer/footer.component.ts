import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../services/usersdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  users:any;
  constructor(private userData:UsersdataService)
  {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data;
    })
  }
  ngOnInit(): void {
      
  }

}
