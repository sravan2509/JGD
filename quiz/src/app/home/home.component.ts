import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sgl: boolean;
  mtp: boolean;
  wrt: boolean;
  t:boolean
  time:number
  x:any
  constructor() { }

  ngOnInit(): void {
    this.sgl=false;
  this.mtp=false;
  this.wrt=false;
  this.t=false
 
  }
 

  Sque=[
    {"id":1,"q":"what is 2+2 ?","opt":["1","2","3","4"],"ans":"4"},
    {"id":2,"q":"what is 2*2 ?","opt":["1","2","3","4"],"ans":"4"},
    {"id":3,"q":"what is 2/2 ?","opt":["1","2","3","4"],"ans":"1"},
    {"id":4,"q":"what is 2-2 ?","opt":["1","0","3","4"],"ans":"0"},
    {"id":5,"q":"what is (2*2)2 ?","opt":["8","2","3","4"],"ans":"8"},
    {"id":6,"q":"what is 2+(2+2) ?","opt":["1","2","3","6"],"ans":"6"},
    {"id":7,"q":"what is (2+2)/2 ?","opt":["1","2","3","4"],"ans":"2"},
    {"id":8,"q":"what is (2+2)*2 ?","opt":["1","2","8","4"],"ans":"8"},
    {"id":9,"q":"what is 22-2  ?","opt":["20","2","3","4"],"ans":"20"},
    {"id":10,"q":"what is 2+22 ?","opt":["1","2","3","24"],"ans":"24"},
    {"id":11,"q":"what is 2+(22-2) ?","opt":["1","22","3","4"],"ans":"22"},
    {"id":12,"q":"what is 2*2+22 ?","opt":["26","2","3","4"],"ans":"26"},
    {"id":13,"q":"what is 2+2-2 ?","opt":["1","2","3","4"],"ans":"2"},
    {"id":14,"q":"what is 2+20 ?","opt":["1","2","22","4"],"ans":"22"},
    {"id":15,"q":"what is 22/2 ?","opt":["1","2","3","11"],"ans":"4"},
  ]
  Sover
Sscore
i:any=this.Sque[0]
cong:any
write(){this.t=this.wrt=true ;this.mtp=this.sgl=false; this.timer();}
  single(){this.t=this.sgl=true;this.Sover=this.wrt=this.mtp=false;this.time=30,this.Sscore=0,this.timer();this.i=this.Sque[0];}
  
  check(a,id){
    console.log(a)
    if(a==this.i.ans){
      this.Sscore+=1;
    if(this.Sscore>=10){this.cong=true}else{this.cong=false}}
    if(id==15){this.Sover=true}
    this.i=this.Sque[id];  
  }

  timer(){
    if(this.time>0){
this.x=setInterval(()=>
 {this.time--;
 if(this.time<=0){clearInterval(this.x);this.Sover=true}},1000);}

  }



  
Mque=[
  {"id":1,"q":"Which two of the following numbers have a product that is between –1 and 0?(Indicate both of the numbers.^=> power of)","opt":["2^–4","-10","-20","3^-2"],"ans":["2^–4","-10"]},
  {"id":2,"q":"Which of the following integers are multiples of both 2 and 3?(Indicate all such integers)","opt":["8","12","18","36"],"ans":["12","18","36"]},
  {"id":3,"q":"Each employee of a certain company is in either Department X or Department Y, and there are more than twice as many employees in Department X as in Department Y. The average (arithmetic mean) salary is $25,000 for the employees in Department X and $35,000 for the employees in Department Y. Which of the following amounts could be the average salary for all of the employees of the company?(Indicate all such amounts.)","opt":["$28000","$31000","$26000","$34000"],"ans":["$26000","$28000"]},
  {"id":4,"q":"Which of the following could be the units digit of 57 to the power n where n is a positive integer?(Indicate all such digits.)","opt":["1","3","7","9"],"ans":["1","3","7","9"]}
]
Mi=0
// submitc:Boolean[]
Mover
  Mscore=0
  Ma:string[]=new Array()
  mq:any=this.Mque[0]
  mul(){this.t=this.mtp=true;this.Mover=this.sgl=this.wrt=false;this.Mi=0,this.Mscore=0,this.Ma=[],this.mq=this.Mque[0]} 

checkM(e,a){
  // let index =this.Mque.findIndex(m=>m.id===id)
  // console.log(e)
  if(e.target.checked){
 this.Ma[this.Mi]=a
 this.Mi+=1}
 else{
   let i=this.Ma.indexOf(a)
   if(i>-1){
   this.Ma.splice(i,1);}
  //  this.Ma=this.Ma.filter(x=>x!==a)
 }
 
}
submit(id){
 console.log(this.Ma)
  
  let index =this.Mque.findIndex(m=>m.id===id)

  for(let j=0;j<this.Ma.length;j++){
    if(this.Ma[j]!==" "){
    if(this.Mque[index].ans.indexOf(this.Ma[j])>-1){this.Mscore+=1}
    else{this.Mscore-=1}}
  }
// this.submitc[id+1]=false
console.log(this.Mscore);

this.Mi=0
this.Ma=[]
if(id!==4){
this.mq=this.Mque[id]}else{this.Mover=true}
}















}
