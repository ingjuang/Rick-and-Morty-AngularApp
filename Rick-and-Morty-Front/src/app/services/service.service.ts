import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL:string = environment.API_URL;
  result:any;
  loading:boolean = false;
  headers: HttpHeaders = new HttpHeaders()
  .set('content-type','application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient){ 
    this.loading = false;

  }


  async getInitalData(module: string){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}${module}`;
      this.result = firstValueFrom(this.http.get(url, {headers: this.headers}))
      .then(
        (res: any)=>{
          this.result = res;
          resolve(res)
        },(msg)=>{
          reject(msg)
        }
      )
    })
    return promise
  }

  async getDataPagination(url: string){
    let promise = new Promise((resolve, reject)=>{
      this.result = firstValueFrom(this.http.get(url, {headers: this.headers}))
      .then(
        (res: any)=>{
          this.result = res;
          resolve(res)
        },(msg)=>{
          reject(msg)
        }
      )
    })
    return promise
  }

  async getDataByName(word: string, module: string){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}${module}/${word}`;
      this.result = firstValueFrom(this.http.get(url, {headers: this.headers}))
      .then(
        (res: any)=>{
          this.result = res;
          resolve(res)
        },(msg)=>{
          reject(msg)
        }
      )
    })
    return promise
  }

  async getDataByStatus(word: string, module: string){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}${module}/${word}`;
      this.result = firstValueFrom(this.http.get(url, {headers: this.headers}))
      .then(
        (res: any)=>{
          this.result = res;
          resolve(res)
        },(msg)=>{
          reject(msg)
        }
      )
    })
    return promise
  }

  async getDataByType(word: string, module: string){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}${module}/${word}`;
      this.result = firstValueFrom(this.http.get(url, {headers: this.headers}))
      .then(
        (res: any)=>{
          this.result = res;
          resolve(res)
        },(msg)=>{
          reject(msg)
        }
      )
    })
    return promise
  }
}
