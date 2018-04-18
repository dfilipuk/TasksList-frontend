import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authorizationService: AuthorizationService) {
  }

  public isUserAuthorized(): boolean {
    return this.authorizationService.isAuthorized();
  }
}
