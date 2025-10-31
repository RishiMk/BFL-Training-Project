import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-light text-center py-3 mt-4 border-top">
      <small>&copy; {{ currentYear }} ShopApp. All rights reserved.</small>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
