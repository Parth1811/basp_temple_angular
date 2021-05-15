import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HomeComponent } from './home/home.component';
import { SpecialDatesComponent } from './special-dates/special-dates.component';
import { lbrPipe } from './home/home.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from "@angular/platform-browser";
import { IgxCalendarModule } from 'igniteui-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        lbrPipe,
        SpecialDatesComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        // ComponentsModule,
        ExamplesModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HammerModule,
        IgxCalendarModule,
        // IgxDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
