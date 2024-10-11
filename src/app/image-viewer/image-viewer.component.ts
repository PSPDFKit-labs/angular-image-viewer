import { Component, OnInit, Renderer2 } from '@angular/core';
import Viewer from 'viewerjs';
@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [],
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
})

export class ImageViewerComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  viewer: any;
  // imageSrc = '../../assets/image-1.png';
  imageSources = [
    '../../assets/image-1.png',
    '../../assets/image-2.png',
    '../../assets/image-3.png',
  ];
  currentIndex = 0;

  ngOnInit() {
    const img = this.renderer.selectRootElement('img');

    this.viewer = new Viewer(img, {
      inline: true,
    });
  }

  showNextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.imageSources.length) {
      this.currentIndex = 0;
    }
    this.viewer.show(this.currentIndex);
  }
}
