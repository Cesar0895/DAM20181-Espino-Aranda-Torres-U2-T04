import { Injectable } from "@angular/core";

import {AngularFireDatabase} from "angularfire2/database/database";



@Injectable()
export class TasksService {

constructor(public afDB:AngularFireDatabase){}

    tasks=[];
      /**
       * getTasks
       */
      public getTasks() {
         // return this.tasks;  
         
         return this.afDB.list('notas/').valueChanges();
      } 

      public getTask(id){
         // return this.tasks.filter(function(e,i){return e.id ==id})[0] || {id:null,title:null,description:null}; 
     
        return this.afDB.object('notas/'+id);
        }

      /**
       * name
       */

      public createTask(Task) {
      this.afDB.database.ref('notas/'+Task.id).set(Task);

    //this.tasks.push(Task)   
      
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