import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  template: `
     <section class="bmi-calculator-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title chart-title">
                        <span>check your body</span>
                        <h2>BMI CALCULATOR CHART</h2>
                    </div>
                    <div class="chart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bmi</th>
                                    <th>WEIGHT STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="point">Below 18.5</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td class="point">18.5 - 24.9</td>
                                    <td>Healthy</td>
                                </tr>
                                <tr>
                                    <td class="point">25.0 - 29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td class="point">30.0 - and Above</td>
                                    <td>Obese</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-title chart-calculate-title">
                        <span>check your body</span>
                        <h2>CALCULATE YOUR BMI</h2>
                    </div>
                    <span *ngIf="bmi" class="bmi-value">Your BMI is {{ bmi.toFixed(2) }} which is considered {{ bmiStatus }}</span>
                    <div class="chart-calculate-form">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis.</p>
                          <form #bmiForm="ngForm">  
                            <div class="row">
                                <div class="col-sm-6">
                                    <input type="number" name="height" [(ngModel)]="height" placeholder="Height / inches">
                                </div>
                                <div class="col-sm-6">
                                    <input type="number" name="weight" [(ngModel)]="weight" placeholder="Weight / Lbs">
                                </div>
                                
                                <div class="col-lg-12">
                                    <button (click)="calcBmi($event, bmiForm)">Calculate</button>
                                </div>
                            </div>
                          </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [
  ]
})
export class BmiComponent {
  height!: number
  weight!: number
  bmi!: number
  bmiStatus: string = ''

  calcBmi(event: Event, bmiForm: NgForm) {
    event.preventDefault()

    this.bmi = this.weight / (this.height * this.height) * 703;
    if(this.bmi <= 18.5) {
      this.bmiStatus = 'Underweight'
    }else if (this.bmi > 18.5 && this.bmi <= 24.9) {
      this.bmiStatus = 'Healthy'
    }else if (this.bmi >= 25 && this.bmi <= 29.9) {
      this.bmiStatus = 'Overweight'
    }else {
      this.bmiStatus = 'Obese'
    }

    setTimeout(() => {
      this.bmi = 0;
      this.bmiStatus = ''
      bmiForm.resetForm()
    }, 10000);
    
  }

}
