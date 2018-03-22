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
  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksService:TasksService) {
  this.task= tasksService.gettasks(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
