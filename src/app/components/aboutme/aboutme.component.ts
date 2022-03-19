import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selfie:string='/assets/selfie.svg';
  farg:string='/assets/farg.svg';
  home  :string='/assets/homeLogo.svg';
}
