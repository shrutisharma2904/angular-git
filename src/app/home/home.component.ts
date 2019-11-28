import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps : any;
  constructor(private service:DataService)   
  {

  }

  ngOnInit() {
   let observableresult =  this.service.Select();
    observableresult.subscribe((result)=>{
     console.log(result);
     this.emps= result;
    //[
    //   {"No":1,"Name":"abc","Age":30},
    //   {"No":1,"Name":"abc","Age":30},
    //   {"No":1,"Name":"abc","Age":30}
    // ];
   });
    
  }

}
