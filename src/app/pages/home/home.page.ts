import { InfoPage } from './../../modals/info/info.page';
import { RememberPage } from './../../modals/remember/remember.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private modalCtrl : ModalController) {}

      hiddenLogin = false;

      async openModalRemember(){
			
        this.hiddenLogin = true;
  
        const modal = await this.modalCtrl.create({
          component: RememberPage 
        })
  
        await modal.present();
        const { data } = await modal.onDidDismiss();
        this.hiddenLogin = data.showBoxLoing
  
      }

      async openModalInfo(){
			
        this.hiddenLogin = true;
  
        const modal = await this.modalCtrl.create({
          component: InfoPage 
        })
  
        await modal.present();
        const { data } = await modal.onDidDismiss();
        this.hiddenLogin = data.showBoxLoing
  
      }

      

}
