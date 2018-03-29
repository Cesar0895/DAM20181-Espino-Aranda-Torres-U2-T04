import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class TasksService {

constructor(public afDB:AngularFireDatabase){

}

    tasks=[
        {id:1,title:'task1',description:'Description of the task1'},
        {id:2,title:'task2',description:'Description of the task2'},
        {id:3,title:'task3',description:'Description of the task3'},
        {id:4,title:'task4',description:'Description of the task4'}
      ];
      /**
       * getTasks
       */
      public getTasks() {
          return this.tasks;   
      } 
      public getTask(id){
          return this.tasks.filter(function(e,i){return e.id ==id})[0] || {id:null,title:null,description:null}; 
      }

      /**
       * name
       */

      public createTask(Task) {
      this.afDB.database.ref('notas/'+Task.id).set(Task);

      //  this.tasks.push(Task)   
      
      }

      public editTask(Task) {
        for(let i = 0; i<this.tasks.length;i++){
            if(this.tasks[i].id== Task.id){
                this.tasks[i] =Task;
            }
        }
       }

      public deleteTask(Task){
        for(let i = 0; i<this.tasks.length;i++){
            if(this.tasks[i].id== Task.id){
                this.tasks.splice(i, 1);
            }
        }        
      } 
    }