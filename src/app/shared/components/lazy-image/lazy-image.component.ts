import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onLoad() {
    this.hasLoaded = true;
  }

  ngOnInit(): void {
    if( !this.url ) throw new Error('URL ir requiered');
  }
}
