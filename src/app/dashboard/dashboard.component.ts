import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AddWardSelect:boolean;
  AddWard:boolean ;
  ExistWard:boolean;
  AddWardText:boolean;
  constructor(private http:HttpClient ,private router: Router) { }

  ngOnInit(): void {
      this.AddWardSelect = true;
      this.AddWard = true;
      this.ExistWard = false;
      this.AddWardText = false;
    
  }

  ShowWard(value:any){
    if(value === 'Add Ward'){
      this.AddWardSelect = false;
      this.AddWard = false;
      this.ExistWard = true;
      this.AddWardText = true;
    }
  else{
      this.AddWardSelect = true;
      this.AddWard = true;
      this.ExistWard = false;
      this.AddWardText = false;
    }
  }}
