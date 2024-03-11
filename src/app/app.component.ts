/*
TODO:
- Remove from console log the access token received


*/

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcService } from './dc.service';
import { DynamicWrapperComponent } from './dynamic-wrapper/dynamic-wrapper.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { GenesysCloudService } from './services/genesys-cloud.service';

// Genesys Cloud environment
const clientId = environment.GENESYS_CLOUD_CLIENT_ID;
const gcenv = environment.GENESYS_CLOUD_REGION;
const redirectUri = environment.REDIRECT_URI;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicWrapperComponent],
  template: `
    <main>
    <header class="app-name">
    <div class="app-container">
    <h1 class="main-header">Procesos WFM Adicionales</h1>
    </div>
    </header>
    <section class="content">
    <app-dynamic-wrapper [dynamicComponents]="components"></app-dynamic-wrapper>
    </section>
    </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mapfre-attempt-2';
  dynamicService = inject(DcService);
  components = this.dynamicService.getDynamicComponents();

  constructor(private genesysCloudService: GenesysCloudService, private httpClient: HttpClient ){}
  ngOnInit(): void {
    this.handleHash();
  }
  private getParameterByName(name: string): string {
    name = name.replace(/[\\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\#&]" + name + "=([^&#]*)");
    const results = regex.exec(window.location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  private handleHash(): void {
    if (window.location.hash) {
      console.log(window.location.hash);
      const token = this.getParameterByName('access_token');
      this.httpClient.get(`https://api.${gcenv}/api/v2/users/me`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).subscribe(data => {
        console.log(data);
      });
      window.location.hash = '';
    } else {
      const queryStringData = {
        response_type: "token",
        client_id: clientId,
        redirect_uri: redirectUri
      };
      window.location.replace(`https://login.${gcenv}/oauth/authorize?${this.serialize(queryStringData)}`);
    }
  }

  private serialize(obj: any): string {
    const params = new URLSearchParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.set(key, obj[key]);
      }
    }
    return params.toString();
  }
}
