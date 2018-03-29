import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksService } from "../../services/tasks.services";
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 tasks=[];
 @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public tasksService : TasksService) {
    this.tasks=tasksService.getTasks();
  }

  public goToDetail(id) {
    // Let's navigate from TabsPage to Page1
    this.navCtrl.push(DetailPage, {id:id});
 }

 public createTask() {
  // Let's navigate from TabsPage to Page1
  this.navCtrl.push(DetailPage, {id:0});
}

}
