import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-api-form',
  imports: [],
  templateUrl: './post-api-form.component.html',
  styleUrl: './post-api-form.component.css'
})
export class PostApiFormComponent {

  carList:any[]=[]
  
  constructor(private http:HttpClient){}

  // getCarList() {
  //   this.http.get('/api-free/CarRentalApp/GetCars')
  // .subscribe((result: any) => {
  //   this.carList = result.data;
  //   console.log(this.carList);
  // });
  // }

  getCarList(){
    this.http.get('/api-free/CarRentalApp/GetCars').subscribe({
      next: (result: any) => {
        this.carList = result.data;
        console.log(this.carList);
      },
      error: (error) => {
        console.log('error occurred while fetching the all customer data', error);
      }
    });
  }
  
}
