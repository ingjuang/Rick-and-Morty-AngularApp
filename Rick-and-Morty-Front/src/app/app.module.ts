import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbCardModule, NbDatepickerModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [NbSidebarService, provideHttpClient()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbLayoutModule,
        NbIconModule,
        NbEvaIconsModule,
        NbSidebarModule,
        NbLayoutModule,
        NbEvaIconsModule,
        NbCardModule,
        HeaderComponent,
        SidebarComponent,
        NgbModule
    ]
})
export class AppModule { }
