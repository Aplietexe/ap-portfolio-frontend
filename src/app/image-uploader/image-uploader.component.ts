import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core"
import { MatIconModule } from "@angular/material/icon"
import { Subject, takeUntil } from "rxjs"

@Component({
  selector: "app-image-uploader",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./image-uploader.component.html",
  styleUrls: ["./image-uploader.component.scss"],
})
export class ImageUploaderComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>()

  @Input() isLoggedIn?: boolean

  @Output() readonly url = new EventEmitter<string>()

  uid: string

  constructor(private readonly httpClient: HttpClient) {
    const radix = 36
    const sliceStart = 2
    this.uid = Math.random().toString(radix).slice(sliceStart)
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0]

    if (!file || !this.isLoggedIn) {
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "apportfolio")
    formData.append("cloud_name", "dz9dywysj")

    this.httpClient
      .post("https://api.cloudinary.com/v1_1/dz9dywysj/image/upload", formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: unknown) => {
        if (
          typeof response === "object" &&
          response &&
          "secure_url" in response &&
          typeof response.secure_url === "string"
        ) {
          this.url.emit(response.secure_url)
        }
      })
  }
}
