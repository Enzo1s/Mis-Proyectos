import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { TokenDto } from '../models/TokenDto';
import { OauthService } from '../services/oauth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private oauthService: OauthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((data) => {
      this.userLogged = data;
      this.isLogged =
        this.userLogged != null && this.tokenService.getToken() != null;
    });
  }

  singInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.socialUser = data;
      const tokenGoogle = new TokenDto(this.socialUser.idToken);
      this.oauthService.google(tokenGoogle).subscribe(
        (res) => {
          this.tokenService.setToken(res.value);
          this.isLogged = true;
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.logOut();
        }
      );
    });
  }

  sigInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      this.socialUser = data;
      const tokenFace = new TokenDto(this.socialUser.authToken);
      this.oauthService.faceboot(tokenFace).subscribe(
        (res) => {
          this.tokenService.setToken(res.value);
          this.isLogged = true;
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  logOut(): void {
    this.authService.signOut().then((data) => {
      this.tokenService.logOut();
      this.isLogged = false;
    });
  }
}
