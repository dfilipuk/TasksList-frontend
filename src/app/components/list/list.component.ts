import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { AuthorizationService } from '../../services/authorization.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  loaded: Boolean = false;
  errorMessage: String = null;
  tasks: Task[];

  columnsToDisplay = ['itemNum', 'itemName', 'itemAuthor', 'itemPriority'];

  constructor(private authorizationService: AuthorizationService, private taskService: TaskService) {
  }

  ngOnInit() {
    this.loaded = false;
    this.requestData();
  }

  public reloadData() {
    this.requestData();
  }

  public signOut() {
    this.authorizationService.deathorize();
  }

  private requestData() {
    this.taskService.loadTasks().subscribe(
      data => {
        this.updateData(data);
      },
      error => {
        this.setError();
      }
    );
  }

  private updateData(items: Task[]) {
    this.tasks = items;
    this.loaded = true;
    this.errorMessage = null;
  }

  private setError() {
    this.errorMessage = 'Unable to load data';
  }
}
