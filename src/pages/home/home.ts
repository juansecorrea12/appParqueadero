import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParqueaderoPage } from '../parqueadero/parqueadero';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController) {

  }

  start() {
    this.navCtrl.setRoot(ParqueaderoPage);
  }

  parkDisponible(No, Key){
    this.http.get('https://contenido-dispositivo-ecoparque-luismigon.c9users.io/datoTarjeta/' + No + '/' + Key).subscribe(data => {
      if (data.json().success) {
        this.navCtrl.setRoot('inicio');
        console.log(data.json());
      } else {
        console.log("credenciales incorrectas");
        console.log(data.json());

        let alert = this.alertCtrl.create({
          title: 'Oops',
          subTitle: '',
          buttons: ['OK']
        });
        alert.present();

      }
    });
  }
 
}
