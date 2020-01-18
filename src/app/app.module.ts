import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ErrorSnackbarComponent } from "./error-snackbar/error-snackbar.component";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    EditPostComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationDialogComponent,
    EditPostComponent,
    ErrorSnackbarComponent
  ]
})
export class AppModule {}
