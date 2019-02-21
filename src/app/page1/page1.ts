import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
declare var PinchZoom: any
@Component({
  selector: 'app-home',
  templateUrl: 'page1.html',
  styleUrls: ['page1.scss'],
})
export class Page1 {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  ionViewDidEnter() {
    // let myElement = document.getElementById("myElement");
    setTimeout(() => {
      let el = document.querySelector('div.pinch-zoom');
      var pz = new PinchZoom.default(el, {});
    }, 10000);
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
