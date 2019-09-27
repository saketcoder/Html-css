import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  constructor(private router:Router) { }
  exit(){
    this.router.navigate(['./demo']);
  }
  ngOnInit() {
  }

}
