import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  constructor(private router:Router) { }
exit(){
  this.router.navigate(['./demo'])
}
  ngOnInit() {
  }

}
