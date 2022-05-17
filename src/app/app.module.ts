import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgetpasswordComponent } from './components/auth/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { UpdatemembershipComponent } from './components/membership/updatemembership/updatemembership.component';
import { HomeComponent } from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ListingComponent } from './listing/listing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SelfprofileComponent } from './components/profile/selfprofile/selfprofile.component';
import { EducationdetailsComponent } from './components/profile/educationdetails/educationdetails.component';
import { FamilydetailsComponent } from './components/profile/familydetails/familydetails.component';
import { DescribeyourselfComponent } from './components/profile/describeyourself/describeyourself.component';
import { PartnerpreferencesComponent } from './components/profile/partnerpreferences/partnerpreferences.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { HelpdeskComponent } from './components/helpdesk/helpdesk.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileupdateComponent } from './components/profileupdate/profileupdate.component';
import { SearchComponent } from './components/search/search.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';
import { SettingComponent } from './components/setting/setting.component';
import { ListingMatchesComponent } from './components/listing-matches/listing-matches.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SupportTicketComponent } from './components/support-ticket/support-ticket.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyinterestComponent } from './components/myinterest/myinterest.component';
import { ShortlistComponent } from './components/shortlist/shortlist.component';
import { ThamkyouComponent } from './components/thamkyou/thamkyou.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { MyInterestService } from './my-interest.service';
import { NgPipesModule } from 'ngx-pipes';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProfileupdateComponent } from './compoenets/profileupdate/profileupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    UpdatemembershipComponent,
    HomeComponent,
    ProfileComponent,
    SelfprofileComponent,
    EducationdetailsComponent,
    FamilydetailsComponent,
    DescribeyourselfComponent,
    PartnerpreferencesComponent,
    ChatboxComponent,
    HelpdeskComponent,
    HeaderComponent,
    FooterComponent,
    ProfileupdateComponent,
    SearchComponent,
    InboxComponent,
    ViewprofileComponent,
    SettingComponent,
    ListingMatchesComponent,
    DashboardComponent,
    SupportTicketComponent,
    SidebarComponent,
    MyinterestComponent,
    ShortlistComponent,
    ThamkyouComponent,
    EditprofileComponent,
  //  ProfileupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [Ng2SearchPipeModule,HttpClientModule,MyInterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
