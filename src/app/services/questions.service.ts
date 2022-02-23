import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class QuestionsService {
  /*
  This optimaly should come from the backend for specific quiz
  A more abstract and generic approach can be taken by
  having each question object with the defined types when the answer can be dictated base
  on specific format from the backend, taking the whole process of creating quizes to be
  fully from backend with minimum hardcoding from the frontend
   */
  private questionsBank = [
    {
      question: 'What is your housing status?',
      answers:[
        'Homeless / Living in a shelter', 'Homeowner', 'Living with family / friend', 'Renting'
      ]
    },
    {
      question: 'What is your year of birth?',
      answers:[]
    },
    {
      question: 'What is your gender?',
      answers:[
        'Female', 'Male'
      ]
    }
  ];

  currentQuestion = 0;
  private questionSubject = new Subject();

  constructor() {
    // building range of years for the second question
    const rangeOfYears = (start: any, end: any) => Array(end - start + 1)
      .fill(start)
      .map((year, index) => year + index)
    this.questionsBank[1].answers = rangeOfYears(1970, 2010);
  }

  getCurrentQuestionNumber() {
    return this.currentQuestion;
  }

  getQuestionSubscribe() {
    return this.questionSubject;
  }

  // Add each question to the subscribers of the subject to have one step at the time
  getQuestion(){
    if (this.currentQuestion < 3) {
      this.questionSubject.next(this.questionsBank[this.currentQuestion]);
    } else {
      this.questionSubject.next(null);
    }
    this.currentQuestion++;
  }

  // Allows the user to repeat the quiz
  reset(){
    this.currentQuestion = 0;
    this.getQuestion();
  }

}
