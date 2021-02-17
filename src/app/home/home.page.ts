import { Component } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socialSharing: SocialSharing) { }

  regularSharing() {
    this.socialSharing.share("Mi mensaje que comparto", null, null, null).then(() => {
      console.log("Se ha compartido correctamente");
    }).catch((error) => {
      console.log("Se ha producido un error: " + error);
    });
  }

}
