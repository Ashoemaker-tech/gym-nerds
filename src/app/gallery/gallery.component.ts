import { Component, ViewEncapsulation } from "@angular/core";
import lgZoom from "lightgallery/plugins/zoom";
import { BeforeSlideDetail } from "lightgallery/lg-events";

@Component({
  selector: "app-gallery",
  template: `
    <app-page-header
      [title]="title"
      image="../../assets/img/breadcrumb-bg.jpg"
    ></app-page-header>
    <div class="gallery-page gallery-section">
      <div class="gallery">
        <div class="grid-sizer"></div>
        <lightgallery [settings]="settings" [onBeforeSlide]="onBeforeSlide">
          <a
            data-src="../../assets/img/gallery/gallery-1.jpg"
            data-responsive="../../assets/img/gallery/gallery-1.jpg"
          >
            <img
              class="img-responsive gs-item grid-wide"
              src="../../assets/img/gallery/gallery-1.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-2.jpg"
            data-responsive="../../assets/img/gallery/gallery-2.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-2.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-3.jpg"
            data-responsive="../../assets/img/gallery/gallery-3.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-3.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-4.jpg"
            data-responsive="../../assets/img/gallery/gallery-4.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-5.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-5.jpg"
            data-responsive="../../assets/img/gallery/gallery-5.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-5.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-6.jpg"
            data-responsive="../../assets/img/gallery/gallery-6.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item grid-wide"
              src="../../assets/img/gallery/gallery-6.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-7.jpg"
            data-responsive="../../assets/img/gallery/gallery-7.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item grid-wide"
              src="../../assets/img/gallery/gallery-7.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-8.jpg"
            data-responsive="../../assets/img/gallery/gallery-8.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-8.jpg"
            />
          </a>
          <a
            data-src="../../assets/img/gallery/gallery-9.jpg"
            data-responsive="../../assets/img/gallery/gallery-9.jpg"
          >
            <img
              class="img-responsive gallery-item gs-item"
              src="../../assets/img/gallery/gallery-9.jpg"
            />
          </a>
        </lightgallery>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  title: string = "Gallery";

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
