import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  ngOnInit() {
    const buttonGroup = document.getElementById('button-group');
    const wrapperForm = document.getElementById('wrapper-form');
  
    if (!buttonGroup || !wrapperForm) {
      console.error('Button group or wrapper form not found in DOM');
      return;
    }
  
    // Function to handle the resize logic
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Move the button group below the wrapper form
        if (wrapperForm.nextSibling !== buttonGroup) {
          wrapperForm.parentNode?.insertBefore(buttonGroup, wrapperForm.nextSibling);
        }
      } else {
        // Restore the button group to the left column
        const leftColumn = buttonGroup.closest('.left-column');
        if (leftColumn && leftColumn !== buttonGroup.parentElement) {
          leftColumn.appendChild(buttonGroup);
        }
      }
    };
  
    // Attach resize event listener
    window.addEventListener('resize', handleResize);
  
    // Call the function once on page load
    handleResize();
  }
}
