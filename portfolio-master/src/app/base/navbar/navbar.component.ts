import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['it', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  onClick() {
    let navCollapse: any = document.getElementById('#navbarNav');
    console.log(navCollapse);
    navCollapse.classList.remove('collapse.show');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
