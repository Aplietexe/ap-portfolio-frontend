import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { tap } from "rxjs"

import { API_URL } from "src/constants"

import { ProfileInfo } from "./profile-info.model"

@Injectable({
  providedIn: "root",
})
export class ProfileInfoService {
  private profileInfo?: ProfileInfo

  constructor(private readonly httpClient: HttpClient) {}

  getProfileInfo() {
    return this.httpClient.get<ProfileInfo>(`${API_URL}/profile/`).pipe(
      tap((profileInfo) => {
        this.profileInfo = profileInfo
      }),
    )
  }

  updateHeaderUrl(headerUrl: string) {
    if (!this.profileInfo) {
      throw new Error("Profile info should be fetched before updating it")
    }

    this.profileInfo.headerUrl = headerUrl

    return this.httpClient.put(`${API_URL}/profile/`, this.profileInfo)
  }

  updateAvatarUrl(avatarUrl: string) {
    if (!this.profileInfo) {
      throw new Error("Profile info should be fetched before updating it")
    }

    this.profileInfo.avatarUrl = avatarUrl

    return this.httpClient.put(`${API_URL}/profile/`, this.profileInfo)
  }

  updateName(name: string) {
    if (!this.profileInfo) {
      throw new Error("Profile info should be fetched before updating it")
    }

    this.profileInfo.name = name

    return this.httpClient.put(`${API_URL}/profile/`, this.profileInfo)
  }

  updateTitle(title: string) {
    if (!this.profileInfo) {
      throw new Error("Profile info should be fetched before updating it")
    }

    this.profileInfo.title = title

    return this.httpClient.put(`${API_URL}/profile/`, this.profileInfo)
  }

  updateAbout(about: string) {
    if (!this.profileInfo) {
      throw new Error("Profile info should be fetched before updating it")
    }

    this.profileInfo = { ...this.profileInfo, about }

    return this.httpClient.put(`${API_URL}/profile/`, this.profileInfo)
  }
}
