import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO';
  todo:string[]=[];

  //ng build --prod --base-href "https://MohamedHamdy94.github.io/GitHubfolderName/"
  recievData(event:any) {
    // console.log(event);
    this.todo=event;
   }


   delData(data:any){
   let index = this.todo.indexOf(data);
   this.todo.splice(index,1)
  //   for( var i = 0; i < this.todo.length; i++){ 
  //     if ( this.todo[i] === data) { 
  //       this.todo.splice(i, 1); 
  //     }
  
  // }  
   }
}