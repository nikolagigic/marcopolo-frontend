import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { NgbdModalContent } from '../modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        ProductsComponent,
        NgbdModalContent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component.products);
  });
});
