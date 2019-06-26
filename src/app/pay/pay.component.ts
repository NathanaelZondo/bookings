import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {Route} from '@angular/router';
import { empty } from 'rxjs';
import { isUndefined } from 'util';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  account = [];
  ac:any = {};
  message;

submit()
{
this.account.push(this.ac);
this.ac ={};

console.log(this.account[0].num)

if(this.account[0].num== true)
{
this.message = "Enter Account Number";
}

window.location.href = '/feedback';


}
}
