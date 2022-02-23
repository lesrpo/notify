import { Component } from '@angular/core';
import {QuestionsService} from "./services/questions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifyAi';

  constructor(private questionsService: QuestionsService) {
  }

  restart() {
    this.questionsService.reset();
  }
}
