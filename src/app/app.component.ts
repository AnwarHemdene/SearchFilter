import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filter';
  queryString ;

  listofstudent = [
    {id:"1", name:"icha",age:"20"},
    {id:"2", name:"denok",age:"23"},
    {id:"3", name:"sri utami",age:"10"},
    {id:"4", name:"mbok darmi",age:"40"},
    {id:"5", name:"jeniffer",age:"30"},
    {id:"6", name:"limbuk",age:"22"}
  ];
}
