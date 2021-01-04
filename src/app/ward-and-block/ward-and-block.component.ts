import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ward-and-block',
  templateUrl: './ward-and-block.component.html',
  styleUrls: ['./ward-and-block.component.css']
})
export class WardAndBlockComponent implements OnInit {

  constructor(private http:HttpClient ,private router: Router) { }

  ngOnInit(): void {
  }

}
