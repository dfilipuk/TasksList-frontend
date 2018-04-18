import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Task[];
  loaded: Boolean;
  columnsToDisplay = ['itemNum', 'itemName', 'itemAuthor', 'itemPriority'];

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.items = [
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1'),
      new Task(1, 'name1', 'author1', 'priority1')
    ];
    this.loaded = true;
  }

  public signOut() {
    this.authorizationService.deathorize();
  }
}
