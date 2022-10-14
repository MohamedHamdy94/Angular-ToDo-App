import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-todo',
  templateUrl: './child-todo.component.html',
  styleUrls: ['./child-todo.component.scss']
})
export class ChildTodoComponent implements OnInit {
  @Input() dataEntered:any;
  @Output() data = new EventEmitter<any>();

  constructor() { }

  isMarked:boolean=false;
  changeStyle(){
    this.isMarked= ! this.isMarked;
  }
  del(val:any){
    this.data.emit(val)

  }
  ngOnInit(): void {
    this.data==this.dataEntered
  }

}
