import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
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
  
  show=true;
  task:any={id:null,title:null,description:null};
  id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public tasksService:TasksService, public toastCtrl: ToastController) {

    this.id=navParams.get('id');
    if (this.id!=0) {
      tasksService.getTask(this.id).valueChanges().subscribe(note =>{
        console.log(note)          
        this.task = note});
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addTask(){
    if (this.id!=0) {
      this.tasksService.editTask(this.task);
      alert("Tarea Modificada");
      
       //estamos editando 
    }else{ 
      this.task.id= Date.now();
      this.tasksService.createTask(this.task);
      alert("Tarea Creada");
    }
    this.navCtrl.pop();
  }
  deleteTask(){

    //preguntar si estas seguro de eliminar nota
    this.show =false;
    this.tasksService.deleteTask(this.task);
    this.navCtrl.pop();
    const toast = this.toastCtrl.create({
      message: 'Tarea eliminada',
      duration: 2000
      
    });
    toast.present();
  }

}
