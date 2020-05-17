import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportsService {

  private url = environment.BASE_URL_API;

  constructor(private http: HttpClient) { }

  getTransportTypes() {

    const urlQuery = '/transports/types';
    return this.getRequest(urlQuery);
  }

  getTransports() {

    const urlQuery = '/transports';
    return this.getRequest(urlQuery);
  }

  getTransport(transportId: number) {

    const urlQuery = `/transports/${transportId}`;
    return this.getRequest(urlQuery);
  }

  getRequest(urlQuery) {
    const url = `${this.url}${urlQuery}`;
    return this.http.get(url);
  }

}
