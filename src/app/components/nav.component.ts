import { Component } from '@angular/core';
import { faUser, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="w-full flex px-4 py-6 flex-row items-center justify-between">
      <div>Gym Nerds</div>

        <ul class="flex space-x-5 text-gray-800 text-[18px] font-medium">
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Home</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">About</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Gallery</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Schedule</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Blog</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Pricing</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Classes</a></li>
          <li><a class="hover:text-rose-600" style="transition: all 0.3s ease 0s;" routerLink="/">Contact</a></li>
        </ul>

      <div class="space-x-5 text-[18px]">
        <fa-icon class="text-3xl cursor-pointer hover:text-rose-600 ease-in duration-200" [icon]="faUser"></fa-icon>
        <fa-icon class="text-3xl cursor-pointer hover:text-rose-600 ease-in duration-200" [icon]="faChartBar"></fa-icon>
       <a class=" p-3 border-2" routerLink="#"><fa-icon class="bg-rose-600 py-2 px-3 rounded font-light text-white" [icon]="faPlus"></fa-icon> Class Registration</a> 
      </div>

    </nav>
  `,
  styles: [
  ]
})
export class NavComponent {
  faUser = faUser
  faChartBar = faChartBar
  faPlus = faPlus
}
