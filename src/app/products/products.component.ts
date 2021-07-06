import { Subject, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../modal/modal.component';

import { ProductService } from '../services/product.service';

import { ProductInterface } from './product.config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  constructor(
    private _productService: ProductService,
    private modalService: NgbModal,
  ) { }

  products: Subject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>([]);

  ngOnInit(): void {
    this.getAllProducts()
  }

  public getAllProducts() {
    this._productService.getProducts().subscribe(
      data => this.products.next(data)
    );
  }

  removeProduct(id: string) {
    this._productService.removeProduct(id);

    window.location.reload()
  }

  openProductModal(id: string, title: string, short_description: string, description: string) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.short_description = short_description;
    modalRef.componentInstance.description = description;
  }

}
