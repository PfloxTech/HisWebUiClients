import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {
    baseUrl: string = "";
    constructor() { }
}