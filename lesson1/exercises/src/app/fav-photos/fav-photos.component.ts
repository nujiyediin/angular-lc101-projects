import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Beautiful pics of me';
  image1 = 'https://pbs.twimg.com/profile_images/1007725154057707520/i_t7isD8_400x400.jpg';
  image2 = 'https://npr.brightspotcdn.com/dims4/default/5c67227/2147483647/strip/true/crop/200x267+0+32/resize/300x400!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa6%2Fc7%2F7b720fea43f18d8ef78768b2f306%2Fnomin-ujiyediin.jpg';
  image3 = 'https://pbs.twimg.com/profile_images/1007725154057707520/i_t7isD8_400x400.jpg';

  constructor() { }

  ngOnInit() {
  }

}