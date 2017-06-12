import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParqueaderoPage } from './parqueadero';

@NgModule({
  declarations: [
    ParqueaderoPage,
  ],
  imports: [
    IonicPageModule.forChild(ParqueaderoPage),
  ],
  exports: [
    ParqueaderoPage
  ]
})
export class ParqueaderoPageModule {}
