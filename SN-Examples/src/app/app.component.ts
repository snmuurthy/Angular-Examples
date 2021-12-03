import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SN-Examples';

  onKeyup(templateData: any) {
    this.title = templateData.value
  }
}
