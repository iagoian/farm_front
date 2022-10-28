import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Farm } from '../models/Farm';
import { Owner } from '../models/Owner';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

export class FarmService {

url=`${environment.apiBaseUrl}/farms`;  

  constructor(private http: HttpClient){

  }

  listAll(): any {
    const apiUrl = `${this.url}`;
    return this.http.get<any>(apiUrl);
  }

  register(farms: Farm) {
    const apiUrl=`${this.url}/farms`;
    return this.http.post<Farm>(apiUrl,farms);
  }
  
  read(id: number): Owner {

    return this.listAll().find((owner:  Owner) => owner.id === id);
  }


  update(farm: Farm){
    const apiUrl = `${this.url}/update`;
    return this.http.put<Farm>(apiUrl,farm);

  }

  delete(owner_id: number){
    const apiUrl = `${this.url}/delete/${owner_id}`;
    return this.http.delete<Farm>(apiUrl);

  }
  
}
