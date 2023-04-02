import { Component } from '@angular/core';

@Component({
  selector: 'app-classes-table',
  template: `
    <section class="class-timetable-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title">
                        <span>Find Your Time</span>
                        <h2>Find Your Time</h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="table-controls">
                        <ul>
                            <li (click)="setClasses('All Events')" [class.selected]="selectedClasses === ''">All Events</li>
                            <li (click)="setClasses('Body Building')" [class.selected]="selectedClasses === 'Body Building'">Body Building</li>
                            <li (click)="setClasses('Cardio')" [class.selected]="selectedClasses === 'Cardio'">Cardio</li>
                            <li (click)="setClasses('MMA')" [class.selected]="selectedClasses === 'MMA'">MMA</li>
                            <li (click)="setClasses('Yoga')" [class.selected]="selectedClasses === 'Yoga'">Yoga</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div [class.filtering]="tableFiltering" class="class-timetable">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="class-time">6.00am - 8.00am</td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="dark-bg hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Yoga'" class="dark-bg hover-bg ts-meta">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Body Building'" class="hover-bg ts-meta">
                                        <h5>Body Building</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td class="dark-bg blank-td"></td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="hover-bg ts-meta">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Body Building'" class="dark-bg hover-bg ts-meta">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="class-time">10.00am - 12.00am</td>
                                    <td class="blank-td"></td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="dark-bg hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="dark-bg hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Body Building'" class="hover-bg ts-meta">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="dark-bg hover-bg ts-meta">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td class="blank-td"></td>
                                </tr>
                                <tr>
                                    <td class="class-time">5.00pm - 7.00pm</td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="dark-bg hover-bg ts-meta">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="hover-bg ts-meta">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Body Building'" class="dark-bg hover-bg ts-meta">
                                        <h5>Body Building</h5>
                                        <span>Robert Cage</span>
                                    </td>
                                    <td class="blank-td"></td>
                                    <td [class.show]="selectedClasses === 'Yoga'" class="dark-bg hover-bg ts-meta">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="dark-bg hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>Kimberly Stone</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="class-time">7.00pm - 9.00pm</td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                    <td class="dark-bg blank-td"></td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="hover-bg ts-meta">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Yoga'" class="dark-bg hover-bg ts-meta">
                                        <h5>Yoga</h5>
                                        <span>Keaf Shen</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="hover-bg ts-meta">
                                        <h5>Karate</h5>
                                        <span>Donald Grey</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'MMA'" class="dark-bg hover-bg ts-meta">
                                        <h5>Boxing</h5>
                                        <span>Rachel Adam</span>
                                    </td>
                                    <td [class.show]="selectedClasses === 'Cardio'" class="hover-bg ts-meta">
                                        <h5>Cardio</h5>
                                        <span>RLefew D. Loee</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [`
    .table-controls li:hover {
        color: #ffffff
    }
    .table-controls li.selected {
        color: #ffffff
    }
  `
  ]
})
export class ClassesTableComponent {
    selectedClasses: string = ''
    tableFiltering: boolean = false

    setClasses(c: string) {
        if(c === 'All Events') {
            this.selectedClasses = c
            this.tableFiltering = false
        }else if (c === 'Body Building' || c === 'Cardio' || c === 'MMA' || c === 'Yoga') {
            this.selectedClasses = c
            this.tableFiltering = true
        }else {
            this.selectedClasses = ''
            this.tableFiltering = false
        }
        
    }
}
