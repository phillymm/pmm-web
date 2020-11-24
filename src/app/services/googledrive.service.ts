import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Committee } from './models/committee';
import { Artifact } from './models/artifact';
import { PMMEvent } from './models/pmm-events';
import { MembershipType } from './models/membershipTypes';
import { MerchandiseItem } from './models/merchandise';

@Injectable()
export class GoogledriveService {
  // ideally need an api that can explore the shared folders.
  constructor(private http: Http) { }

  getMembershipTypes(): Observable<MembershipType[]> {
    return this.http
      .get('assets/data/membershipTypes.json')
      .map(res => this.extractData<MembershipType[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  getMerchandiseItems(): Observable<MerchandiseItem[]> {
    return this.http
      .get('assets/data/merchandiseItems.json')
      .map(res => this.extractData<MembershipType[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  getCommittee(): Observable<Committee[]> {
    return this.http
      .get('assets/data/committee.json')
      .map(res =>  this.extractData<Committee[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  getNewsletters(): Observable<Artifact[]> {
    return this.http
      .get('assets/data/newsletters.json')
      .map(res =>  this.extractData<Artifact[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  getEvents(): Observable<PMMEvent[]> {
    return this.http
      .get('assets/data/events_V1.json')
      .map(res =>  this.extractData<PMMEvent[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  getPhotos(): Observable<Artifact[]> {
    return this.http
      .get('assets/data/photos.json')
      .map(res =>  this.extractData<Artifact[]>(res))
      .catch(this.catchBadResponse)
      .finally(() => {});
  }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    return Observable.throw(errorResponse);
  }

  public extractData<T> (res: Response) {
    if (res.status < 200 || res.status >= 300) {
        // handle errors TBD
        return Observable.throw('Error Processing data.');
    } else {
        const body = res.json ? res.json() : null;
        // return <T>(body && body.data || {});
        return <T>(body || {});
    }
  }
}
