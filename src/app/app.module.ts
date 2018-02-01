import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatInputModule, MatMenuModule } from '@angular/material';
import { CommerceslistComponent } from './commerceslist/commerceslist.component';
import { SearchfilterPipe } from './filters/searchfilter.pipe';
import { SortbyratingPipe } from './filters/sortbyrating.pipe';
import { CommerceComponent } from './commerce/commerce.component';

@NgModule({
  declarations: [
    AppComponent,
    CommerceslistComponent,
    SearchfilterPipe,
    SortbyratingPipe,
    CommerceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
