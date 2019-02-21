import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';

declare var PinchZoom: any
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas1') barCanvas1;
  barChart: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    // let myElement = document.getElementById("myElement");
    setTimeout(() => {
      let el = document.querySelector('div.pinch-zoom');
      var pz = new PinchZoom.default(el, {});
    }, 10000);


    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          label: "ภาค",
          backgroundColor: "red",
          pointBackgroundColor: "red",
          pointRadius: 10,
          pointHoverRadius: 10,
          data: [{
            x: 2,
            y: 9
          },
          {
            x: 4,
            y: 6
          },
          {
            x: 7,
            y: 8
          },
          {
            x: 2,
            y: 2
          }
          ],
        }],

      },
      options: {
        legend: {
          labels: {
             usePointStyle: true
          }
       },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var label = "";
              if(tooltipItem.index == 0){
                label = "ภาคเหนือ"
              }
              else if(tooltipItem.index == 1){
                label = "ภาคกลาง"
              }
              else if(tooltipItem.index == 2){
                label = "ภาคตะวันออกเฉียงเหนือ"
              }
              else if(tooltipItem.index == 3){
                label = "ภาคใต้"
              }
              // var label = data.datasets[tooltipItem.datasetIndex].label || '';
              // label += ":" + tooltipItem.index;
              return label;
            }
          }
        },
        scales: {
          yAxes: [{
             display: false,
            ticks: {
              beginAtZero: true,
              steps: 1,
              max: 10,
              min: 0
            }
          }],
          xAxes: [{
            display: false,
            ticks: {
              steps: 1,
              max: 10,
              min: 0
            },
            gridLines: {
              offsetGridLines: false,
            },
          }],
        }
      }

    });



    this.barChart = new Chart(this.barCanvas1.nativeElement, {
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
