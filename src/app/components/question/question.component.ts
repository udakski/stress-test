import {Component, OnInit, Inject} from '@angular/core';
import {MatStepper,  MatDialog} from "@angular/material";
import {ResultModalComponent} from "../result-modal/result-modal.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialog) { }


  openDialog(): void {
    console.log('dia is called');
    let dialogRef = this.dialogRef.open(ResultModalComponent, {
      width: '100%',
      data: { score: this.getSum() }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }



  ngOnInit() {
    for (let i = 0; i < this.questions.length; i++) {
      this.answer.push(0);
    }
    console.dir(this.answer);
  }

  favoriteSeason: string;
  answer = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  questions = ['Jeg har overblik over mine opgaver ',
    'Jeg føler mig kompetent til de opgaver jeg løser',
    'Jeg udvikler mig i jobbet',
    'Jeg kan selv prioritere og vælge opgaver til og fra', 'Jeg bliver nødt til at arbejde i et højt tempo',
    'Jeg arbejder ofte udenfor arbejdstiden/Jeg bliver ofte nødt til at arbejde over',
    'Det er vanskeligt for mig at overskue min kalender og mailbox',
    'Jeg er ofte irritabel og utålmodig',
    'Jeg har tit svært ved at falde i søvn',
    'Jeg vågner tit om natten ',
    'Mine tanker kredser meget om arbejdet',
    'Jeg har svært ved at koncentrere mig',
    'Jeg bekymrer mig om mit arbejde og hvor galt det kan gå',
    'Jeg glemmer mange ting for øjeblikket',
    'Jeg er meget træt',
    'Jeg har svært ved at tage beslutninger på mit arbejde',
    'Jeg tænker ofte på mit arbejde - også når jeg holder fri',
    'Jeg græder ofte ',
    'Jeg synes gnisten har forladt mig',
    'Jeg har svært ved at løse arbejdsopgaver, som tidligere ikke har voldt mig problemer',
    'Nogle gange har jeg lyst til at sige op',
    'Jeg har svært ved selv at strukturere mit arbejde'
  ];


  seasons = [
    '',
    'Tempereret',
    'Opvarmet',
    'Over-ophedet',
    'Ned-smeltet',
    'Ud-brændt',
  ];

  showProgess = false;
  showQuestions = true;
  showCalc=false;

  status='ccccc';
  statusList=['Please wait. Calculating stress score',  'Calibrating Stress model index', 'Aligning with space time continuem',
  'Almost there ...', ''];
  ans = [

    'Tempereret',
    'Opvarmet',
    'Over-ophedet',
    'Ned-smeltet',
    'Ud-brændt',
  ];

  getSum(){
    return this.answer.reduce((sum,val)=>sum +=val);
  }

  goBack(stepper: MatStepper){
    if(stepper.selectedIndex==21){
        this.openDialog();
    }
    stepper.next();

  }
}
