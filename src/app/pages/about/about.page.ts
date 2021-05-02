import { Component, OnInit } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  conferenceDate = '2047-05-17';
  constructor(
   //private call:CallNumber,
   //private socialSharing:SocialSharing,
  ) { }

  ngOnInit() {
  }
  /** 
  callNow() {
    this.call.callNumber("+919989887765", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  shareViaFacebook() {
    // recommended to use canShareVia before using shareVia        
    this.socialSharing.canShareVia("facebook", "Veloice:Intelligent Business Telephony", "Real time Voice", "http://veloice.com/images/banner.png", "http://veloice.com").then(() => {
      this.socialSharing.shareViaFacebook("Veloice:Intelligent Business Telephony", "http://veloice.com/images/banner.png", "http://veloice.com");
    }).catch(() => {
      alert("Cannot share on Facebook");
    });
  }

  shareViaWhatsApp() {
    // recommended to use canShareVia before using shareVia        
    this.socialSharing.canShareVia("whatsapp", "Veloice:Intelligent Business Telephony", "Real time Voice", "http://veloice.com/images/banner.png", "http://veloice.com").then(() => {
      this.socialSharing.shareViaWhatsApp("Veloice:Intelligent Business Telephony", "http://veloice.com/images/banner.png", "http://veloice.com");
    }).catch(() => {
      alert("Cannot share on Whatsapp");
    });
  }

  shareViaEmail() {
    // recommended to use canShareVia before using shareVia        
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail(
        'Veloice:Intelligent Business Telephony', // Message
        'Veloice', // Email Subject
        ['toperson@xyz.com', 'tosecond@xyz.com'], // TO: must be null or an array
        ['cc@xyz.com'], // CC: must be null or an array
        null, // BCC: must be null or an array
        ['http://veloice.com/images/banner.png'] // FILES: can be null, a string, or an array
        );
    }).catch(() => {
      alert("Cannot share on Email");
    });
  }
 
    */
}
