import {
  Component,
  ɵɵNgOnChangesFeature,
  OnChanges,
  OnInit
} from "@angular/core";
import { NotesServiceService } from "./services/notes-service.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { Post } from "./models/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  posts: any[];
  constructor(
    private noteService: NotesServiceService,
    public dialog: MatDialog
  ) {
    this.noteService.getpost().subscribe(res => {
      this.posts = res;
    });
  }

  ngOnInit() {}

  /**
   * this function lets you edit the posts
   * @param i
   * @post the data of the post
   */
  onEditClick(i: number, post: Post): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: "300px",
      data: { postData: { title: post.title, body: post.body } }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.posts.splice(i, 1, result.data);
      }
    });
  }

  /**
   * this function deletes the particular post from the posts
   *  @param i
   */
  onDeleteClick(i: number): void {
    console.log("delete", i);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.posts.splice(i, 1);
        this.posts = this.posts;
      }
    });
  }

  /**
   * adds post
   */
  addPost() {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: "300px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.posts = [result.data, ...this.posts];
      }
    });
  }
}
