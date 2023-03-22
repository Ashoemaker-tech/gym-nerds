import { Component } from "@angular/core";

@Component({
  selector: "app-team",
  template: `
    <section class="team-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="team-title">
              <div class="section-title">
                <span>Gym Trainers</span>
                <h2>Team Of Expert Coaches</h2>
              </div>
              <a href="#" class="primary-btn btn-normal appoinment-btn"
                >appointment</a
              >
            </div>
          </div>
        </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-8 py-3">
              <div class="ts-item" style="background-image: url('../../../assets/img/team/team-1.jpg');">
                <div class="ts_text">
                  <h4>Athart Rachel</h4>
                  <span>Gym Trainer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 py-3">
              <div class="ts-item" style="background-image: url('../../../assets/img/team/team-2.jpg')">
                <div class="ts_text">
                  <h4>Athart Rachel</h4>
                  <span>Gym Trainer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-8 py-3">
              <div class="ts-item" style="background-image: url('../../../assets/img/team/team-3.jpg')">
                <div class="ts_text">
                  <h4>Athart Rachel</h4>
                  <span>Gym Trainer</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TeamComponent {}
