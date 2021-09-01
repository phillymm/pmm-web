import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembershipComponent } from './membership/membership.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewToPhillyComponent } from './new-to-philly/new-to-philly.component';
import { CommitteeComponent } from './committee/committee.component';
import { FaqComponent } from './faq/faq.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { LogoSloganComp2021Component } from './logoSloganComp2021/logoSloganComp2021.component';
import { CookiePolicyComponent } from './cookiepolicy/cookiepolicy.component';
export const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about-us',
      component: AboutComponent
    },
    {
      path: 'committee',
      component: CommitteeComponent
    },
    {
      path: 'membership',
      component: MembershipComponent
    },
    {
      path: 'merchandise',
      component: MerchandiseComponent
    },
    {
      path: 'newsletter',
      component: NewsletterComponent
    },
    {
      path: 'new-to-philly',
      component: NewToPhillyComponent
    },
    {
      path: 'logoSloganComp2021',
      component: LogoSloganComp2021Component
    },
    {
      path: 'photo-video',
      component: PhotoVideoComponent
    },
    {
      path: 'faq',
      component: FaqComponent
    },
    {
      path: 'cookiepolicy',
      component: CookiePolicyComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
