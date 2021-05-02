import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDto } from '../models/TokenDto';

const cabecera = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  oauthURL = 'http://localhost:9000/oauth/';

  constructor(private httpClient: HttpClient) {}

  public google(tokenDto: TokenDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(
      this.oauthURL + 'google',
      tokenDto,
      cabecera
    );
  }

  public faceboot(tokenDto: TokenDto): Observable<TokenDto> {
    return this.httpClient.post<TokenDto>(
      this.oauthURL + 'facebook',
      tokenDto,
      cabecera
    );
  }
}
