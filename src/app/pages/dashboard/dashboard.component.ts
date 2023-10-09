import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Service } from 'src/app/services/service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  nombreCentres:any;
  nombreUtilisateurs:any
  labelDonnation:any=[]
  dataDonnation:any=[]

  labelStock:any=[]
  dataStock:any=[]


  constructor(private service:Service) {
  }

  ngOnInit() {

    
  this.getNombreDonnerByCentre()
  this.getStockSangByCentre()
   this.getNombreOfUsers()

   this.getNombreOfCentres()

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


  }



  getNombreOfUsers(){

    this.service.getNombreOfUsers().subscribe(
      (data: any) => {
        if (data !== undefined) {
         this.nombreUtilisateurs=data[0].nombreUsers ;
        }
      },
      (err) => {
        console.log(err);
      }
    );

  }


  getNombreOfCentres(){

    this.service.getNombreOfCentres().subscribe(
      (data: any) => {
        if (data !== undefined) {
          this.nombreCentres=data[0].nombreCentres ;
        }
      },
      (err) => {
        console.log(err);
      }
    );

  }



  getStockSangByCentre(){

    this.service.getStockSangByCentre().subscribe(
      (data: any) => {
        if (data !== undefined) {
        
          data.forEach(element => {
           this.labelStock.push(element.nom);
           this.dataStock.push(element.stockSang)
          });


          
    var chartOrders = document.getElementById('chart-sang');

    parseOptions(Chart, chartOptions());


    let dataChartStock=  {
      labels: this.labelStock,
      datasets: [
        {
          label: "Nombre_paquets",
          data: this.dataStock,
          maxBarThickness: 10
        }
      ]
    }
    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: dataChartStock
    });


          
        }
      },
      (err) => {
        console.log(err);
      }
    );

  }




  getNombreDonnerByCentre(){

    this.service.getNombreDonnerByCentre().subscribe(
      (data: any) => {
        if (data !== undefined) {
          data.forEach(element => {
            this.labelDonnation.push(element.nom);
            this.dataDonnation.push(element.nombreDonner)
           });

           let dataDonnation= {
            labels: this.labelDonnation,
            datasets: [{
              label: 'nombre Donneur',
              data: this.dataDonnation
            }]
          }
           
            var chartSales = document.getElementById('chart-donnation');

            this.salesChart = new Chart(chartSales, {
              type: 'line',
              options: chartExample1.options,
              data: dataDonnation
            });


        }
      },
      (err) => {
        console.log(err);
      }
    );

  }


}
