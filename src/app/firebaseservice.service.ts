import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { info } from './addtask/info';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {


  selectuser: info = {
    name: null,
    id: null
  }
  array: any[] = [];

  constructor(private http: HttpClient) { }

  url: String = 'https://addtask-afe36.firebaseio.com/';

  postData(data) {
    return this.http.post(`${this.url}/users.json`, data);
  }

  updateData(data) {
    return this.http.put(`${this.url}users/${data.id}.json`, data);
  }

  deleteData(data) {
    return this.http.delete(`${this.url}users/${data.id}.json`, data);
  }

  getData() {
    return this.http.get(`${this.url}/users.json`).pipe(map(data => {
      let userArray: any[] = [];
      for (let key in data) {
        userArray.push({ ...data[key], id: key })
      }
      return userArray;
    })
    ).subscribe(data => {
      this.array = data;
      console.log(data);

    })
  }

  ngDoCheck() {
    this.getData();
  }
}
