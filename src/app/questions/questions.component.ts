import { Component, OnInit } from '@angular/core';
import { QuestionsService } from "../services/questions.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  question: any = { question: '', answers: [] };
  currQuestionTerm = "";
  questionNumber = 0;
  personalInfo: any = {};

  constructor(public questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestionSubscribe().subscribe((question) => {
      this.question = question;
      this.questionNumber = this.questionsService.getCurrentQuestionNumber();
    });
    this.questionsService.getQuestion();
  }

  saveAnswerTerm() {
    switch (this.questionNumber){
      case 0:
        this.personalInfo.status = this.currQuestionTerm;
        break;
      case 1:
        this.personalInfo.birthYear = this.currQuestionTerm;
        break;
      case 2:
        this.personalInfo.gender = this.currQuestionTerm;
        break;
    }
    this.currQuestionTerm = '';
    this.questionsService.getQuestion();
  }

}
