import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";

const URL = "https://example.com/api/";
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;

  // Angular2 File Upload
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
