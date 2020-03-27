import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type Task = {
  title: string,
  desc: string,
  hour: number,
  minutes: number
}

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  task: Task = {
    title: '',
    desc: '',
    hour: 0,
    minutes: 0
  }

  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/tasks/" + this.route.snapshot.paramMap.get('id'))
    .subscribe((task: Task) => {
      this.task = task
    });
  }

}