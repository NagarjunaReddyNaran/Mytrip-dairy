// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;
  showIcons: boolean = false;
  iconLabels: any;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number, obj: marker) {
    console.log(`clicked the marker: ${label || index}`);
    this.showIcons = !this.showIcons;
    this.iconLabels = obj;
  }

  mapClicked($event: MouseEvent) {
    console.log('::::::', $event);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      label: '',
      text: '',
      image: '',
      icons: {} as Icon,
    });
  }

  trackByIndex = (index: number): number => {
    return index;
  };

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'Nag',
      draggable: true,
      text: 'Nagrjuna here',
      image: 'https://source.unsplash.com/random/200x200?sig=1',
      icons: {
        icon1: 'dashboard',
        icon2: 'stars',
        icon3: 'alarm',
        icon4: 'pan_tool',
        icon5: 'accessibility',
      },
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      text: 'Suresh here',
      image: 'https://source.unsplash.com/random/200x200?sig=2',
      icons: {
        icon1: 'settings_applications',
        icon2: 'group_work',
        icon3: 'build_circle',
        icon4: 'offline_bolt',
        icon5: 'opacity',
      },
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      text: 'Rajesh here',
      image:
        'https://www.dreamstime.com/vector-illustration-avatar-dummy-sign-collection-avatar-image-stock-symbol-web-vector-design-avatar-dummy-image137160097',
      icons: {
        icon1: 'brightness_1',
        icon2: 'brightness_2',
        icon3: 'brightness_3',
        icon4: 'brightness_4',
        icon5: 'brightness_5',
      },
    },
  ];
}

interface Icon {
  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  icon5: string;
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
  text: string;
  image: string;
  icons: Icon;
}
