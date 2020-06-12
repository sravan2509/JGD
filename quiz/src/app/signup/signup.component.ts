import { Component, OnInit } from '@angular/core';
import {Signupp} from '../signupp';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 interests=['dance','singing','studying'] 


 binddata=new Signupp('sravan','satish','sra1','sra@gmail.com',2423524235,'male','fdf','fefe','fefe');
  constructor() { }

  ngOnInit(): void {
  }

}
