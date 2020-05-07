import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { LogComponent} from  './log/log.component';
import {RegComponent} from './reg/reg.component';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './cart-page/cart-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CouponsComponent } from './coupons/coupons.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    ProductPageComponent,
    RegisterPageComponent,
    LoginpageComponent,
    HeaderComponent,
    FooterComponent,
    LogComponent,
    RegComponent,
    CartPageComponent,
    CouponsComponent,
    CheckoutComponent,
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CarouselModule.forRoot()

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
