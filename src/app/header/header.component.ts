import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  images: string[] = [
    'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg',
    'https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg',
    'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg',
    'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg',
  ];

  currentIndex: number = 0; // Tracks the current image index
  intervalId: any;

  ngOnInit() {
    // Start the carousel auto-slide
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1000); // Change slide every 1 second
  }

  ngOnDestroy() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Loop back to the start
  }

  getTranslateX() {
    return `translateX(-${this.currentIndex * 100}%)`; // Shift carousel to current image
  }

  menuOpen: boolean = false; // Controls the visibility of the dropdown

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
