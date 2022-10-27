import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Owner } from '../models/Owner';
import { Farm } from './../models/Farm';

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

  public create(farms: Farm) {
    const apiUrl=`${this.url}/create`;
    return this.http.post<Farm>(apiUrl,farms);
  }
  

  public read(id: number): Farm {

    return {} as any
  }

  public list(): any {
    const apiUrl = `${this.url}/`;
    return this.http.get<any>(apiUrl);
  }

  public update(farm: Farm){
    const apiUrl = `${this.url}/update`;
    return this.http.put<Farm>(apiUrl,farm);

  }

  public delete(owner_id: number){
    const apiUrl = `${this.url}/apagar/${owner_id = 1}`;
    return this.http.delete<Farm>(apiUrl);

  }
  
}

// Service localStorage
// export class farmService {

//   constructor() { }

//   listAll(): Farm[] | any[] {
//       const farms = localStorage.getItem('farms');
//       return farms ? JSON.parse(farms) : [];
//   }

//   register(farm: Farm): void {
//       farm.id = new Date().getTime();
//       const farms = this.listAll();
//       farms.push(farm);
//       localStorage.setItem('farms', JSON.stringify(farms));
//   }

//   buscarPorId(id: number): Farm {
//       return this.listAll().find((farm:  Farm) => farm.id === id);
//   }

//   update(farm: Farm): void {
//       const farms: Farm[] = this.listAll();
//       farms.forEach((element, key) => {
//           if (farm.id === element.id) {
//               farms[key] = farm;
//           }
//           if (key === farms.length -1) {
//               localStorage.setItem('farms', JSON.stringify(farms));
//           }
//       });
//   }

//   remover(id: number): void {
//       let farms: farm[] = this.listAll();
//       farms = farms.filter(farm => farm.id !== id);
//       localStorage['farms'] = JSON.stringify(farms);
//   }

// }