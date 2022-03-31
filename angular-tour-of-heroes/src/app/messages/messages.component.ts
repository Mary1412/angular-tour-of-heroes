import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero } from '../heroes/hero';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

 
export class MessagesComponent implements OnInit, OnChanges {
  searchStr='';
  isActive = true;
  

  tod = new  Date('December 25, 1995 13:30:00');
  fromd =  new Date();



  

  constructor(public messageService: MessageService, private _changeDetectorRef: ChangeDetectorRef) {
   
  }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error('Method not implemented.');
  }

  @Input()
  mess: any;



  ngOnInit(): void {
  }

}

