import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit{

  pages =  [
    {
      title: 'Principal',
      url: '/menu/principal',
      icon: 'home'
    },
    {
      title: 'Frameworks',
      children: [
        {
          title: 'angular',
          url: '/menu/angular',
          icon: 'logo-angular'
        },
        {
          title: 'ionic',
          url: '/menu/ionic',
          icon: 'logo-ionic'
        }
      ]
    }
  ]

  constructor() {
    
   }

  ngOnInit() {
    
  }


}
