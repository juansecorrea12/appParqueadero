import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list';

@IonicPage({
  name: "parqueadero",
  segment:"parqueaderopath" 
})
@Component({
  selector: 'page-parqueadero',
  templateUrl: 'parqueadero.html',
})
export class ParqueaderoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParqueaderoPage');
  }

  maps(){
    this.navCtrl.setRoot(ListPage);
  }

}
