import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string = 'thành';
  public age: number = 16;
  public traiCay = ['tao', 'nho'];
  public districts: string[] = []
  public cities = [{
    city: 'An Giang',
    district: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân'
    ]
  },
  {
    city: 'Cà Mau',
    district: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân'
    ]
  }
  ];
  public resetName(): void {
    console.log('reset name');
    this.name = ''
  }
  public ngOnInit(): void {
    console.log('check trai cay=', this.traiCay)
  }
  public changeCity(event: any): void {

    const city1 = event.target.value;
    if (!city1) {
      return;
    }
    console.log(city1);
    const search = this.cities.filter(data => data.city === city1)
    console.log(search)
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }
  }
}
