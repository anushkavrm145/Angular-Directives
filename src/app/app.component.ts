import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngDirectives';
  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5']
  objArray: Array<any>=[
    {id:1,postTitle:'Post 1'},
    {id:2,postTitle:'Post 2'},
    {id:3,postTitle:'Post 3'},
    {id:4,postTitle:'Post 4'},
    {id:5,postTitle:'Post 5'},


  ]
  stepForm:string='hi'
  constructor(){
    for(let i=0;i<this.postArray.length;i++){
      console.log(this.postArray[i])
    }
  }
  isActive:boolean=false;
  addnew(){
    this.objArray.push({id:6,postTitle:"Post 6"})
  }
  onDelete(index:number){
    this.objArray.splice(index,1);
  }
  onClick(status:string){
    this.stepForm=status
  }
}
