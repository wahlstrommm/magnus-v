import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projIcon: string = 'assets/projIcon.svg';
  github: string = 'assets/githubCircle.svg';
  leftArrow:string = 'assets/leftArrow.svg';
  rightArrow:string = 'assets/rightArrow.svg';

  constructor() { }

  listOfMyProjectsLinks:string[]=["https://github.com/wahlstrommm/angular_webshop",'https://wahlstrommm.github.io/angular-services-zoo/','https://gamershabandari.github.io/stader_och_lander/','https://assarbertil.github.io/spelprogrammering/']
  listOfMyProjectsTitle:string[]=['Angular webbshop','Angular in & output. Zoo tema','Grupparbete . Vanilla js. API','Grupparbete.Vanilla js.Jeff Bezos']
  listOfMyProjectsText:string[]=['Angular! Webbshop! En videobutik! Denna var den första stora "riktiga" uppgiften jag lämnade in!','En zoo inspirerande uppgift som syftet var lära mig in och output','Grupparbete! Fokuset här låg att lära oss använda oss av API:er. Med Vanilla JS','Grupparbete! Vanilla JS.Jeff Bezos spel. "Ett mästerverk! 10/10 - Gamereactor"']
  counter:number=0;

  ngOnInit(): void {
  }
  currentLink:string=this.listOfMyProjectsLinks[0];
  currentTitle:string=this.listOfMyProjectsTitle[0];
  currentText:string=this.listOfMyProjectsText[0];

  changeProjectInfoRight(){
    this.counter++
    this.currentLink=this.listOfMyProjectsLinks[this.counter];
    this.currentTitle=this.listOfMyProjectsTitle[this.counter];
    this.currentText=this.listOfMyProjectsText[this.counter];
    if(this.counter==this.listOfMyProjectsLinks.length){
      this.counter=0;
      this.currentLink=this.listOfMyProjectsLinks[this.counter];
      this.currentTitle=this.listOfMyProjectsTitle[this.counter];
      this.currentText=this.listOfMyProjectsText[this.counter];
    }
  }
  changeProjectInfoLeft(){
    if(this.counter === 0){
      this.counter=4;
      this.currentLink=this.listOfMyProjectsLinks[this.counter];
      this.currentTitle=this.listOfMyProjectsTitle[this.counter];
      this.currentText=this.listOfMyProjectsText[this.counter];
    }else{

      this.counter--
      this.currentLink=this.listOfMyProjectsLinks[this.counter];
      this.currentTitle=this.listOfMyProjectsTitle[this.counter];
      this.currentText=this.listOfMyProjectsText[this.counter];
    }
  }
  home  :string='assets/homeLogo.svg';
}
