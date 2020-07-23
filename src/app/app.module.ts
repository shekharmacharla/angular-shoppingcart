import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // twoway data binding 
import { RouterModule} from '@angular/router';  



import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DetailComponent } from './products/detail/detail.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    NavigationComponent,
    WelcomeComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"home", component:WelcomeComponent},
      {path:"products", component: ProductsComponent},
      {path:"login",component:LoginComponent},
      {path:"",redirectTo:"home", pathMatch:"full"},
      {path:"**",redirectTo:"home"}



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
