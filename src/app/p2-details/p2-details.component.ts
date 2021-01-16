import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p2-details',
  templateUrl: './p2-details.component.html',
  styleUrls: ['./p2-details.component.css']
})
export class P2DetailsComponent implements OnInit {
  detailForm:FormGroup;
  stype:string="";
  survey:string="";
  survey_id:string="";
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
    this.detailForm = this.frmbuilder.group({
      stype: new FormControl("",Validators.required),
      survey:new FormControl("",Validators.required),
      survey_id:new FormControl("",Validators.required)
    });
    
   }

  ngOnInit(): void {
  }
detailData(detailForm:any){
  this.stype=detailForm.controls.stype.value;
  if (this.stype=='Vacant')
  {
  this.router.navigate(['/vacant']);
  }
  else {
    this.router.navigate(['/building'])
  }
}
}
