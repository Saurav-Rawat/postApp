import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { ErrorSnackbarComponent } from "../error-snackbar/error-snackbar.component";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"]
})
export class EditPostComponent {
  postForm: FormGroup;
  key: string = "Save";
  headerText: string = "Create Post";
  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.formInit();
    if (this.data) {
      this.key = "Edit";
      this.headerText = "Edit Post";
      this.setFormValues();
    }
  }

  /**
   * this function initializes form
   */
  formInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", [Validators.required])
    });
  }

  /**
   * this function sets the value in the form
   */
  setFormValues(): void {
    this.postForm.patchValue(this.data.postData);
  }

  /**
   * this function returns the new post to the parent component
   */
  onSaveClick() {
    if (this.postForm.invalid) {
      this.openSnackBar();
      return;
    }
    this.dialogRef.close({ data: this.postForm.value });
  }

  /**
   * returns null to the paarent component
   */
  onCancelClick() {
    this.dialogRef.close(null);
  }

  /**
   * opens snackBar
   */
  openSnackBar() {
    this._snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: 5 * 1000
    });
  }
}
