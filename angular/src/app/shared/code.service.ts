import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Code } from '../app.interfaces';


const API = 'localhost:4000/api/codes';
@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private readonly http: HttpClient) { }

  public test() {
    return this.http.get(`${API}/test`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }
  public get = () => this.http.get<Code[]>(`${API}/get`);
  public getOne = (id) => this.http.get<Code>(`${API}/get/${id}`);
  public post = (o: Code) => this.http.post<Code>(`${API}/post`, o);
  public put = (id: number | string, o: Code) => this.http.put<any>(`${API}/put/${id}`, o);
  public delete = (id) => this.http.delete<any>(`${API}/delete/${id}`);

}
