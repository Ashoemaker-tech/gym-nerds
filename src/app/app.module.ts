import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';


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
import { FeaturedComponent } from './_shared/components/featured.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesGridComponent } from './home/ui/class-grid.component';
import { BannerComponent } from './_shared/components/banner.component';
import { PricingCardsComponent } from './_shared/components/pricing-cards.component';
import { TeamComponent } from './_shared/components/team.component';
import { ContactInfoComponent } from './_shared/components/contact-info.component';
import { PageHeaderComponent } from './_shared/components/page-header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutCardComponent } from './about/ui/about-card.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesTableComponent } from './classes/ui/classes-table.component';
import { BmiComponent } from './home/ui/bmi.component';

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
    ClassesGridComponent,
    BannerComponent,
    PricingCardsComponent,
    TeamComponent,
    ContactInfoComponent,
    PageHeaderComponent,
    GalleryComponent,
    PricingComponent,
    AboutCardComponent,
    ClassesComponent,
    ClassesTableComponent,
    BmiComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    LightgalleryModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
