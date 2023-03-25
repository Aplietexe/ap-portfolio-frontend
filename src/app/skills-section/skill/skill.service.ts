import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { DisplayItem } from "src/app/two-column-display/display-item.model"
import { API_URL } from "src/constants"

@Injectable({
  providedIn: "root",
})
export class SkillService {
  constructor(private readonly httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get<DisplayItem[]>(`${API_URL}/skills/`)
  }

  updateItem(item: DisplayItem) {
    return this.httpClient.put<undefined>(`${API_URL}/skills/`, item)
  }

  deleteItem(id: number) {
    return this.httpClient.delete<undefined>(`${API_URL}/skills/${id}`)
  }

  createItem(item: DisplayItem) {
    return this.httpClient.post<undefined>(`${API_URL}/skills/`, item)
  }
}
