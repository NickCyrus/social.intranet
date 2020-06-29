import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.page.html',
  styleUrls: ['./remember.page.scss'],
})
export class RememberPage implements OnInit {

  constructor( private modalCtrl  : ModalController) { }

  ngOnInit() {
  }

  salirModalRemember( ){
      this.modalCtrl.dismiss({
          showBoxLoing : false
      });
  }

}
