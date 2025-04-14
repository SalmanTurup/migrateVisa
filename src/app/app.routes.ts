import { Routes } from '@angular/router';
import { HomeComponent } from './user/user-module/home/home.component';
import { AboutComponent } from './user/user-module/about/about.component';
import { VisaDetailComponent } from './user/user-module/visa-detail/visa-detail.component';
import { BlogComponent } from './user/user-module/blog/blog.component';
import { FAQComponent } from './user/user-module/faq/faq.component';
import { ContactComponent } from './user/user-module/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: VisaDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'contact', component: ContactComponent }

];
