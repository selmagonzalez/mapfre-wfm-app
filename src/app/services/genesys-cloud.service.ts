import { Injectable } from '@angular/core';
import * as platformClient from 'purecloud-platform-client-v2';

@Injectable({
    providedIn: 'root'
})
export class GenesysCloudService {  
    setLanguage(){
        const LANGUAGE_KEY = 'LANGUAGE!';
        return LANGUAGE_KEY;
    }
}