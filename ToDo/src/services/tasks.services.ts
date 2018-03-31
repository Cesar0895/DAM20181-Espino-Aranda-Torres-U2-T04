import { Injectable } from "@angular/core";

@Injectable()
export class TasksService {
    tasks=[
        {id:1,title:'task1',description:'Description of the task1'},
        {id:2,title:'task2',description:'Description of the task2'},
        {id:3,title:'task3',description:'Description of the task3'},
        {id:4,title:'task4',description:'Description of the task4'},
        {id:5,title:'task5',description:'Description of the task2'},
        {id:6,title:'task6',description:'Description of the task3'}
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
       this.tasks.push(Task)   
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