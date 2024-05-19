import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from './components/ui/ui.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'twitter-clone';
}
