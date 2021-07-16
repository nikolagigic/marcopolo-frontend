import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalContent } from './modal.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ModalComponent', () => {
  let component: NgbdModalContent;
  let fixture: ComponentFixture<NgbdModalContent>;

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
    fixture = TestBed.createComponent(NgbdModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
