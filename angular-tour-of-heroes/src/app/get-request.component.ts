import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'get-request', templateUrl: 'get-request.component.html' })
export class GetRequestComponent implements OnInit {
    totalAngularPackages: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers }).subscribe(data => {
            this.totalAngularPackages = data.total;
        })
    }
}