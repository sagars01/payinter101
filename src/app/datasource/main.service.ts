import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private listUrl = 'https://reqres.in/api/users';
  private userUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  /**
   * getUserList
   */
  public getUserList(pageId) {
    return this.httpClient.get(`${this.listUrl}?page=${pageId}`);
  }

  /**
   * getUserList
   */
  public getUser(userid: string | number) {
    return this.httpClient.get(`${this.userUrl}/${userid}`);
  }

}
