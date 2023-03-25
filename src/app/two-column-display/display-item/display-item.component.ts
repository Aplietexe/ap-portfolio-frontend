import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatSnackBarModule } from "@angular/material/snack-bar"

import { AuthService } from "src/app/auth/auth.service"
import { ImageUploaderComponent } from "src/app/image-uploader/image-uploader.component"

import { DisplayItem } from "../display-item.model"

@Component({
  selector: "app-display-item",
  standalone: true,

  imports: [
    CommonModule,
    ImageUploaderComponent,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],

  templateUrl: "./display-item.component.html",
  styleUrls: ["./display-item.component.scss"],
})
export class DisplayItemComponent implements OnInit {
  @Input() item?: DisplayItem

  @Output() readonly itemDelete = new EventEmitter<number>()

  @Output() readonly itemSave = new EventEmitter<DisplayItem>()

  currentItem?: DisplayItem

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.currentItem = this.item
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  saveItem() {
    if (!this.currentItem) {
      return
    }
    this.itemSave.emit(this.currentItem)
  }

  deleteItem() {
    if (!this.currentItem) {
      return
    }
    this.itemDelete.emit(this.currentItem.id)
  }
}
