import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  	providedIn: 'root'
})
export class HTTPService {
  	private server_url: string = 'https://jsonplaceholder.typicode.com';

  	constructor(
  		private http: HttpClient,
      	private router: Router,
  	) { 
  		
  	}

  	getHeaders() {
		const httpOptions = {
			headers: new HttpHeaders(
			  {
				'Content-Type': 'application/json; charset=UTF-8',
			  }
			)
		  };

	    return httpOptions;
	}

  	get(url:any) {
		return this.http.get<any>(this.server_url + url, this.getHeaders())
  	}

  	put(url:any, post_data = {}) {
		return this.http.put<any>(this.server_url + url, JSON.stringify(post_data), this.getHeaders())
  	}

	post(url:any, post_data = {}) {
		return this.http.post<any>(this.server_url + url, JSON.stringify(post_data), this.getHeaders())
  	}

	delete(url:any) {
		return this.http.delete<any>(this.server_url + url)
  	}
}
