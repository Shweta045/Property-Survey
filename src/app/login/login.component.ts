import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  mobile:string = "";
  api:string="http://localhost:8081";
  constructor(private frmbuilder:FormBuilder, private http:HttpClient ,private router: Router) { 
    this.signinForm = this.frmbuilder.group({
      mobile: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  signData(signinForm: any){ 
    this.mobile = signinForm.controls.mobile.value;
    const data = {mobile:this.mobile};
    this.http.get(this.api+"/Login",{params:data}).subscribe((result:any)=>{
      let obj = JSON.stringify(result);
      interface Obj{
        status:number;
        msg:string;
        data:any;
      }
      let res:Obj = JSON.parse(obj);
      if(res.status == 1){
        let dataRes:any = JSON.stringify(res.data);
        sessionStorage.setItem("api",this.api);
        this.router.navigate(['/WardBlock']);
        console.log(data);
      }
      
    })
   
  }

}
