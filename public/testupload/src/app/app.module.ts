import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSelectDirective } from 'ng2-file-upload';



import { FormsModule } from '@angular/forms';
import { ShowhistoryComponent } from './showhistory/showhistory.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    ShowhistoryComponent,
    UploadDocumentComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
