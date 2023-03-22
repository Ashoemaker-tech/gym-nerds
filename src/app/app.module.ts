import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './layout/nav.component';
import { FooterComponent } from './layout/footer.component';
import { SharedModule } from './_shared/modules/shared.module';
import { MobileNavComponent } from './layout/mobile-nav.component';
import { HeroComponent } from './home/ui/hero.component';
import { FeaturedComponent } from './home/ui/featured.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesComponent } from './home/ui/classes.component';
import { BannerComponent } from './_shared/components/banner.component';
import { PricingComponent } from './home/ui/pricing.component';
import { TeamComponent } from './home/ui/team.component';
import { ContactInfoComponent } from './home/ui/contact-info.component';
import { PageHeaderComponent } from './_shared/components/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    MobileNavComponent,
    HeroComponent,
    FeaturedComponent,
    ClassesComponent,
    BannerComponent,
    PricingComponent,
    TeamComponent,
    ContactInfoComponent,
    PageHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
