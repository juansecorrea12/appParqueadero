import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import {ListPage} from '../list/list';

@IonicPage({
  name: "login",
  segment:"loginpath"
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 dato;

  constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController) {
    
/*
    this.http.get('https://ciudades-inteligentes-camilocoa.c9users.io/logadmin/' + this.dato).subscribe(data => {
      this.dato = data.json();
    });
*/
  }


  login() {
    this.navCtrl.setRoot(HomePage);
  }


  ingresar(user, pass) {
    console.log(user);
    console.log(pass);
    this.http.get('https://contenido-dispositivo-ecoparque-luismigon.c9users.io/logadmin/' + user + '/' + pass).subscribe(data => {
      if (data.json().success) {
        this.navCtrl.setRoot(ListPage);
        console.log(data.json());
      } else {
        console.log("credenciales incorrectas");
        console.log(data.json());

        let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: 'Tu nombre de usuario y contraseña no coinciden',
          buttons: ['OK']
        });
        alert.present();

      }
    });
  }

}
