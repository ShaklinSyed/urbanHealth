import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

declare var google: any;

@Component({
  selector: 'app-medium-cont',
  templateUrl: './medium-cont.component.html',
  styleUrls: ['./medium-cont.component.scss']
})

export class MediumContComponent implements AfterViewInit{
  @Input() data: any;
  @ViewChild('chartContainer') chartRef: any;

  elementId: String = '';

  constructor(
    private renderer: Renderer2,
    private utilService: UtilService
    ){
  }

  ngAfterViewInit(): void {
    this.createElement();
    this.renderChart();
  }

  createElement(){
    this.elementId = this.utilService.generateString(8);
    this.renderer.setProperty(this.chartRef.nativeElement, "id", this.elementId);
  }

  renderChart(){
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    let scope = this;
    function drawChart() {
      let data = google.visualization.arrayToDataTable(scope.data.chartData);

      let options = {
        pieHole: 0.4,
        legend: {
          position: "bottom",
          textStyle: {
            fontSize: 9
          }
        }
      };

      let chart = new google.visualization.PieChart(document.getElementById(String(scope.elementId))!);
      chart.draw(data, options);
    }
  }
}
