import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoName:string="/assets/logoName.svg"
  logoNameBig:string="/assets/logoNameBig.svg"
  linkedin: string = '/assets/linkedin.svg';
  google: string = '/assets/google.svg';
  github: string = '/assets/github.svg';
}
