import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private  toast: ToastService) { }

  ngOnInit() {
  }

  sign() {
    this.toast.presentToast('log').then()
  }
}
