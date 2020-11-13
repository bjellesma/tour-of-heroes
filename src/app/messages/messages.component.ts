import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService is public because we'll be using it in our template
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
