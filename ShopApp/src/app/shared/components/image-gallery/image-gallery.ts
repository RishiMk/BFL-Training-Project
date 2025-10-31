import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone:true,
  templateUrl: './image-gallery.html',
  styleUrls: ['./image-gallery.scss']
})
export class ImageGalleryComponent {
  @Input() images: { url: string; alt?: string }[] = [];
  selectedIndex = 0;

  select(i: number) {
    this.selectedIndex = i;
  }
}
