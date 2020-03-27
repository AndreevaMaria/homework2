import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  tasks = []

  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/tasks")
      .subscribe((tasks:any[]) => {
        console.log(tasks)
        this.tasks = tasks
      });
  }

}