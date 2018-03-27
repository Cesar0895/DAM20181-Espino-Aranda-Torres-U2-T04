import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from "../../services/tasks.services";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  task={id:null,title:null,description:null};
  id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksService:TasksService) {
    this.id=navParams.get('id');
    if (this.id!=0) {
      this.task=tasksService.getTask(this.id);
    }
    this.task = tasksService.getTask(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addTask(){
    if (this.id!=0) {
      this.tasksService.editTask(this.task);
      alert("Tarea Editada");
      
       //estamos editando 
    }else{ 
      this.task.id= Date.now();
      this.tasksService.createTask(this.task);
      alert("Tarea creada");
    }
    this.navCtrl.pop();
  }
  deleteTask(){
    this.tasksService.deleteTask(this.task);
    alert("Tarea Eliminada");
    this.navCtrl.pop();
  }

}
