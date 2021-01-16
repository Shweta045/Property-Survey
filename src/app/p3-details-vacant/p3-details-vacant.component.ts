import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p3-details-vacant',
  templateUrl: './p3-details-vacant.component.html',
  styleUrls: ['./p3-details-vacant.component.css']
})
export class P3DetailsVacantComponent implements OnInit {
vacantForm:FormGroup;
site_type:string="";
gis_id:string="";
survey_no:string="";
site_shape:string="";
length:string="";
breadth:string="";
area_sqft:string="";
area_cent:string="";
name:string="";
mobile:string="";
api:any=sessionStorage.getItem('api');
constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) {
  this.vacantForm = this.frmbuilder.group({
    site_type: new FormControl('',Validators.required),
    gis_id:new FormControl('',Validators.required),
    survey_no: new FormControl(),
    site_shape: new FormControl('',Validators.required),
    length: new FormControl(),
    breadth: new FormControl(),
    area_sqft: new FormControl(),
    area_cent: new FormControl(),
    name: new FormControl(),
    mobile: new FormControl()
  });

 
 }

  ngOnInit(): void {

    this.vacantForm.patchValue({
      site_type:"Vacant",
      
  });
  
  }
vacantData(vacantForm:any){
  this.site_type=vacantForm.controls.site_type.value;
  this.gis_id=vacantForm.controls.gis_id.value;
  this.survey_no=vacantForm.controls.survey_no.value;
  this.site_shape=vacantForm.controls.site_shape.value;
  this.length=vacantForm.controls.length.value;
  this.breadth=vacantForm.controls.breadth.value;
  this.area_sqft=vacantForm.controls.area_sqft.value;
  this.area_cent=vacantForm.controls.area_cent.value;
  this.name=vacantForm.controls.name.value;
  this.mobile=vacantForm.controls.mobile.value;
  const data = {site_type:this.site_type,gis_id:this.gis_id,survey_no:this.survey_no,site_shape:this.site_shape,
  length:this.length,breadth:this.breadth,area_sqft:this.area_sqft,area_cent:this.area_cent,name:this.name,mobile:this.mobile};
  this.http.get(this.api+"/vacant",{params:data}).subscribe((result:any)=>{
    let obj = JSON.stringify(result);
    interface Obj{
      status:number;
      msg:string;
      data:any;
    }
    let res:Obj = JSON.parse(obj);
    if(res.status == 1){
      this.router.navigate(['/picture']);
      console.log(data);
    }
    
  })
  
}

}
