import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-presentazione',
  templateUrl: './presentazione.component.html',
  styleUrls: ['./presentazione.component.scss'],
})
export class PresentazioneComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    // this.applyIntersectionObserver();
  }

  // elementsToWatch = document.querySelectorAll('.watch');
  // //callback
  // callback = (items: any) => {
  //   items.forEach((item: any) => {
  //     if (item.isIntersecting) {
  //       item.target.classList.add('.in-page');
  //     } else {
  //       item.target.classList.remove('.in-page');
  //     }
  //   });
  // };

  // //observer
  // observer = new IntersectionObserver(this.callback, { threshold: 0.5 });
  // //  apply
  // applyIntersectionObserver() {
  //   this.elementsToWatch.forEach((element: any) => {
  //     this.observer.observe(element);
  //   });
  // }
}
