import { Routes } from '@angular/router';
import { HomeComponent } from './user/user-module/home/home.component';
import { AboutComponent } from './user/user-module/about/about.component';
import { VisaDetailComponent } from './user/user-module/visa-detail/visa-detail.component';
import { BlogComponent } from './user/user-module/blog/blog.component';
import { FAQComponent } from './user/user-module/faq/faq.component';
import { ContactComponent } from './user/user-module/contact/contact.component';
import { ContentComponent } from './user/user-module/content/content.component';
import { LoginComponent } from './user/user-module/login/login.component';
import { UserDetailsComponent } from './user/user-module/user-details/user-details.component';
import { WelcomeComponent } from './user/user-module/welcome/welcome.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'faq', component: FAQComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'content', component: ContentComponent },
    { path: 'visa', component: VisaDetailComponent },
    { path: 'userDetails', component: UserDetailsComponent },
    { path: 'welcome', component: WelcomeComponent  },
    { path: 'admin', component: AdminDashboardComponent  }     
];
