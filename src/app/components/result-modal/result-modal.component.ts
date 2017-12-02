import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css']
})
export class ResultModalComponent implements OnInit {

  score = 0;
  private showQuestions: boolean;
  private showProgess: boolean;
  private showCalc: boolean;
  constructor(
    public dialogRef: MatDialogRef<ResultModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.score = data.score;
    this.calculateScore();

  }

  statusList=['Please wait. Calculating stress score',  'Calibrating Stress model index', 'Aligning with space time continuem',
    'Almost there ...', ''];

  status = '';

  calculateScore(){
    this.showQuestions = false;
    this.showProgess = true;
    for (let i = 0; i < this.statusList.length; i++) {
      setTimeout(()=>this.status= this.statusList[i],i*1500)
    }
    setTimeout(()=>{
      this.showCalc = true; this.showProgess =false; }, 5*1500);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDia(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
