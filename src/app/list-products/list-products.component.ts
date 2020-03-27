import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  products = []
    
  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/products")
      .subscribe((products:any[]) => {
        this.products = products
      });
  }

}
