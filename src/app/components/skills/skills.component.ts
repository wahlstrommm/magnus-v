import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html5SVG:string='/assets/html5.svg'
  css3SVG:string='/assets/css.svg'
  gitSVG:string='/assets/git.svg'
  typescriptSVG:string='/assets/typescript.svg'
  angularSVG:string='/assets/angular.svg'
  bootstrapSVG:string='/assets/bootstrap.svg'
  javascriptSVG:string='/assets/javascript.svg'
  githubSVG:string='/assets/github.svg'
  wordpressSVG:string='/assets/wordpress.svg'
  figmaSVG:string='/assets/figma.svg'
  photopeaSVG:string='/assets/photopea2.svg'
  photoshopSVG:string='/assets/photoshop2.svg'
  sassSVG:string='/assets/sass.svg'
  inkscapeSVG:string='/assets/inkscape.svg'
  reactSVG:string='/assets/react.svg'
  linuxSVG:string='/assets/linux.svg'
  nodeJsSVG:string='/assets/node-js.svg'
  raspberryPi:string='/assets/Raspberry_Pi.svg'
  kali:string='/assets/kali.svg'

}
