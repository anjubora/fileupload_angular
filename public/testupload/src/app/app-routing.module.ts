import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowhistoryComponent} from './showhistory/showhistory.component';
import {UploadDocumentComponent} from './upload-document/upload-document.component';

const routes: Routes = [
  { path: 'showhistory', component: ShowhistoryComponent},
  { path: 'upload', component: UploadDocumentComponent},
  { path: '', redirectTo: '/upload', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
