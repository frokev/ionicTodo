import { TodosProvider } from '../../providers/todos-provider';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Done page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-done',
  templateUrl: 'done.html'
})
export class DonePage {

doneItems: string[] = this.todosProvider.getDoneTodos();
toggleOptions: boolean = false;

  constructor(public navCtrl: NavController, public todosProvider: TodosProvider) {
    
  }

  ionViewDidLoad() {
    console.log('Hello Done Page');
  }

  deleteItem(item){
    this.remove(this.doneItems, item)
  }

  remove(array: any[], item: any){
    let index: number = array.indexOf(item);
    if (index == 0) array.shift();
    else if (index == array.length -1) array.pop();
    else array.splice(index, index);
  }

  addDoneItem(item: string){
    this.doneItems.push(item);
  }

  btnOptions(){
    if (this.toggleOptions) this.toggleOptions = false;
    else this.toggleOptions = true;
  }

  removeItem(finished: string){
    this.todosProvider.removeDone(finished);
  }

}
