import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Task } from "../models/task";

@Injectable()
export class TaskService {
    public constructor(private httpClient: HttpClient) {
    }

    public loadTasks(): Observable<Task[]> {
        return this.httpClient.get('http://localhost:5000/task/list')
            .map((data: any) => {
                const tasks: Task[] = [];

                data.map(element => {
                    tasks.push(new Task(element.number, element.name, element.author, element.priority));
                });

                return tasks;
            });
    }
}
