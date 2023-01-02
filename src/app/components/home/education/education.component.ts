import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {LanguageService} from "../../../services/language/language.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {


  active = 0
  linktoURL: string = "";

  constructor(
    public analyticsService: AnalyticsService,private languageService:LanguageService
  ) { }

  ngOnInit(): void {
  }
  getUrlFunction(){
    this.languageService.translateService.get("Education.edu").subscribe((val) => {
    })
  }

  getURL() {
    this.languageService.translateService.get("Education.edu").subscribe((val) => {
      for (let urls of val){
        console.log(urls.Link)
        this.linktoURL=String(urls.Link)
      }
      console.log(this.linktoURL)
      // app url

      // Open a new window with the CV
      window.open(this.linktoURL, "_blank");
    })
  }
}
