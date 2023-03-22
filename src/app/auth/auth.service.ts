import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, tap } from "rxjs"

import { API_URL } from "src/constants"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly apiUrl = `${API_URL}/auth/login`

  constructor(private readonly http: HttpClient) {}

  login$(email: string, password: string): Observable<{ "jwt-token": string }> {
    return this.http
      .post<{ "jwt-token": string }>(this.apiUrl, { email, password })
      .pipe(
        tap((response) => {
          this._token = response["jwt-token"]
          localStorage.setItem("jwtToken", response["jwt-token"])
        }),
      )
  }

  logout() {
    this._token = undefined
    localStorage.removeItem("jwtToken")
  }

  get token(): string | undefined {
    if (this._token) {
      return this._token
    }

    const token = localStorage.getItem("jwtToken")

    if (token) {
      this._token = token
      return token
    }

    return undefined
  }

  get isLoggedIn(): boolean {
    return Boolean(this.token)
  }

  private _token?: string
}
