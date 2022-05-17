import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { chmodSync } from 'fs';
import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { CreateticketComponent } from './components/createticket/createticket.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { EditticketComponent } from './components/editticket/editticket.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpdeskComponent } from './components/helpdesk/helpdesk.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ListingMatchesComponent } from './components/listing-matches/listing-matches.component';
import { UpdatemembershipComponent } from './components/membership/updatemembership/updatemembership.component';
import { MyinterestComponent } from './components/myinterest/myinterest.component';
import { DescribeyourselfComponent } from './components/profile/describeyourself/describeyourself.component';
import { EducationdetailsComponent } from './components/profile/educationdetails/educationdetails.component';
import { FamilydetailsComponent } from './components/profile/familydetails/familydetails.component';
import { PartnerpreferencesComponent } from './components/profile/partnerpreferences/partnerpreferences.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SelfprofileComponent } from './components/profile/selfprofile/selfprofile.component';
import { ProfileupdateComponent } from './components/profileupdate/profileupdate.component';
import { SearchComponent } from './components/search/search.component';
import { SettingComponent } from './components/setting/setting.component';
import { ShortlistComponent } from './components/shortlist/shortlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SupportTicketComponent } from './components/support-ticket/support-ticket.component';
import { ThamkyouComponent } from './components/thamkyou/thamkyou.component';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'register', component: RegisterComponent },
  {path:'profile',component:ProfileComponent},
  { path:'profile', children:[
    { path: 'describeyourself', component:DescribeyourselfComponent},
    { path: 'educationdetails', component:EducationdetailsComponent},
    { path: 'familydetails', component:FamilydetailsComponent},
    { path: 'selfprofile', component:SelfprofileComponent},
    {path:'partnerpreferences',component:PartnerpreferencesComponent}
  ]},
  {path:'home',component:HomeComponent},
  {path:'chatbox',component:ChatboxComponent},
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: 'header', component: HeaderComponent },
  {path:'footer',component:FooterComponent},
  {path:'profileupdate', component:ProfileupdateComponent},
  {path:'search',component:SearchComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'updatemembership', component: UpdatemembershipComponent},
  {path: 'viewprofile', component: ViewprofileComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'listing-matches', component: ListingMatchesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'support-ticket', component: SupportTicketComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'shortlist', component: ShortlistComponent},
  {path: 'myinterest', component: MyinterestComponent},
  {path: 'thamkyou', component: ThamkyouComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'editticket',component:EditticketComponent},
  {path:'createticket',component:CreateticketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
