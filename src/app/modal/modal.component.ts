import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h3 #product_title id="product-title" class="modal-title" contenteditable>{{title}}</h3>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-header">
      <h5 #product_short_description id="product-short_description" class="modal-title" contenteditable>{{short_description}}</h5>
    </div>
    <div id="product-text" class="modal-body edit_text" contenteditable>
      <p #product_description >{{description}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="closeModalAndSaveProduct(product_title.innerHTML, product_short_description.innerHTML, product_description.innerHTML)">Save</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() id: any;
  @Input() title: any;
  @Input() short_description: any;
  @Input() description: any;

  constructor(
    public activeModal: NgbActiveModal,
    private _productService: ProductService,
  ) {}

  closeModalAndSaveProduct(title: string, short_description: string, description: string) {
    const product = {
      id: this.id,
      title: title,
      short_description: short_description,
      description: description,
    }

    this._productService.saveProduct(product)

    window.location.reload()

    this.activeModal.close()
  }


}
