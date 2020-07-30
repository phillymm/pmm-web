import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewToPhillyComponent } from './new-to-philly/new-to-philly.component';
import { CommitteeComponent } from './committee/committee.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoogledriveService } from './services/googledrive.service';
import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { HeaderComponent } from './header/header.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonPdfViewerComponent } from './common-pdf-viewer/common-pdf-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembershipComponent,
    AboutComponent,
    NewsletterComponent,
    NewToPhillyComponent,
    CommitteeComponent,
    FaqComponent,
    PageNotFoundComponent,
    PhotoVideoComponent,
    HeaderComponent,
    MerchandiseComponent,
    CommonPdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [
    GoogledriveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
