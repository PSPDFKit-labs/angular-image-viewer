import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-image-viewer';
}
