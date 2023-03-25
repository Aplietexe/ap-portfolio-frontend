import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

import { API_URL } from "src/constants"

import { Language } from "./language.model"

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  constructor(private readonly httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get<Language[]>(`${API_URL}/languages/`)
  }

  updateItem(item: Language) {
    return this.httpClient.put<undefined>(`${API_URL}/languages/`, item)
  }

  deleteItem(id: number) {
    return this.httpClient.delete<undefined>(`${API_URL}/languages/${id}`)
  }

  createItem(item: Language) {
    return this.httpClient.post<undefined>(`${API_URL}/languages/`, item)
  }
}
