import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styleUrls: ["./confirmation-dialog.component.scss"]
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  /**
   * this function returns true flag to parent component which serves as a confirmation that user wants to delete the post
   */
  onYesClick() {
    this.dialogRef.close({ data: true });
  }

  /**
   * this function retuns null to the parent component
   */
  onNoClick() {
    this.dialogRef.close(null);
  }
}
