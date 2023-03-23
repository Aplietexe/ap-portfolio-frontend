import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { API_URL } from "src/constants"

import { AuthService } from "./auth.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (
      this.authService.token &&
      request.url.startsWith(API_URL) &&
      ["POST", "PUT", "DELETE"].includes(request.method)
    ) {
      const authRequest = request.clone({
        headers: request.headers.set(
          "Authorization",
          `Bearer ${this.authService.token}`,
        ),
      })

      return next.handle(authRequest)
    }

    return next.handle(request)
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
}
