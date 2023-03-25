import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { API_URL } from "src/constants"

import { DisplayItem } from "./display-item.model"

@Injectable({
  providedIn: "root",
})
export class TwoColumnDisplayService {
  constructor(private readonly httpClient: HttpClient) {}

  getItems(endpoint: string) {
    return this.httpClient.get<DisplayItem[]>(`${API_URL}/${endpoint}/`)
  }

  updateItem(endpoint: string, item: DisplayItem) {
    return this.httpClient.put<undefined>(`${API_URL}/${endpoint}/`, item)
  }

  deleteItem(endpoint: string, id: number) {
    return this.httpClient.delete<undefined>(`${API_URL}/${endpoint}/${id}`)
  }

  createItem(endpoint: string, item: DisplayItem) {
    return this.httpClient.post<undefined>(`${API_URL}/${endpoint}/`, item)
  }
}
