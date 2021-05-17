import * as angular from 'angular';

import ApexCharts from "../../../../node_modules/apexcharts/dist/apexcharts.min.js"

/**
 * @ngInject
 */
export class AppComponent {
  static componentName:string = "msApp";

  static componentConfig:ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/components/start-app/start-app.component.html'
  };

  private $mdSidenav:angular.material.ISidenavService;

  constructor($mdSidenav:angular.material.ISidenavService) {
    this.$mdSidenav = $mdSidenav;

    var options = {
      series: [{
        name: '2020',
        data: [30,35,32,25,50,100]
      },
      {
        name: '2021',
        data: [15,30,32,33,45,31]
      }],
      chart: {
        type: 'area',
        height: 285,
        stacked: true,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
        },
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min))
          }
        },
      },
      colors: ['#008ffb', '#00E396', '#00e396'],
      dataLabels: {
          enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.5,
          type: "vertical",
          stops: [50, 100]
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '10px',
        offsetY: -5,
        markers: {
          height: '9px',
          width: '9px', 
        }
      },
      xaxis: {
        categories: [`00:00`,`01:00`,`02:00`,`03:00`,`04:00`,`05:00`,`06:00`]
      },
    };

    let options2 = {
      chart: {
        type: 'donut',
        height: 242,
      },
      legend:{
        fontSize: '11px',
        offsetX: 0,
        itemMargin: {
          vertical: 0
        },
      },   
      series: [25.6, 32, 23.8, 9.9, 8.7],
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
    }
  
    let chartLine = new ApexCharts(document.querySelector("#line-chart"), options);
    let chartDonut = new ApexCharts(document.querySelector("#donut-chart"), options2);
  
    chartLine.render();
    chartDonut.render();
  }
}

