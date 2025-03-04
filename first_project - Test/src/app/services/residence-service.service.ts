import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceServiceService {
  UrlResidence="http://localhost:3000/residence"

  constructor(private http:HttpClient) { }

  getallResidence():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.UrlResidence)
  }
  getResidenceById(id:any):Observable<Residence>{
    return this.http.get<Residence>(this.UrlResidence+'/'+id)
  }
  addResidence(res:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>(this.UrlResidence,res)
  }
  updateResidence(res:Residence,id:any):Observable<Residence[]>{
    return this.http.put<Residence[]>(this.UrlResidence+'/'+id,res)
  }
  getResidence(id:any):Observable<Residence>{
    return this.http.get<Residence>(this.UrlResidence+'/'+id)
  }
  deleteResidence(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>(this.UrlResidence+'/'+id)
  }

}
