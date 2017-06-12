import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';


@IonicPage({
  name: "inicio",
  segment: "iniciopath"
})
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  No;
  arreglo: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }


  Dato() {
    var parkDisponible = 100;

    this.http.get('https://contenido-dispositivo-ecoparque-luismigon.c9users.io/zeparkingus/').subscribe(data => {
     // this.ParqueaderosDisponibles = data.json();
      //var resultado = parkDisponible - this.ParqueaderosDisponibles.No;

      this.arreglo = data.json();
      var resultado = this.arreglo[0].No - 1;
      console.log(resultado);
      console.log(data.json());
      //console.log(resultado);

      let alert = this.alertCtrl.create({
          title: 'Genial!!',
          subTitle: 'Has reservado tu parqueadero con exito!!',
          buttons: ['OK']
        });
        alert.present();

    });
  }


}