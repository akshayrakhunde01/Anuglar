import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {
  allUser:any[]=[]
  customers:any[]=[]
  constructor(
    private readonly http:HttpClient
  ){}

  getAllUsers(){
     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      this.allUser=result
     },error=>{
      console.log('error while fetching the all users')
     })
  }

  getAllCustomers(){
    this.http.get('/api/RealEstate/GetAllCustomers').subscribe({
      next: (result: any) => {
        this.customers = result.data;
      },
      error: (error) => {
        console.log('error occurred while fetching the all customer data', error);
      }
    });
  }

}
