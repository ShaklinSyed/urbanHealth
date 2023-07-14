import { AfterViewInit, Component, Input, Renderer2, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

declare var google: any;

@Component({
  selector: 'app-full-cont',
  templateUrl: './full-cont.component.html',
  styleUrls: ['./full-cont.component.scss']
})

export class FullContComponent implements AfterViewInit{
  @Input() data: any;
  @ViewChild('chartContainer') chartRef: any;

  elementId: String = '';

  constructor(
    private utilService: UtilService,
    private renderer: Renderer2){

  }

  ngAfterViewInit(): void {
    this.createIds();
    this.renderCharts();
  }

  createIds(){
    this.elementId = this.utilService.generateString(8);
    this.renderer.setProperty(this.chartRef.nativeElement, "id", this.elementId);
  }

  renderCharts(){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    let scope = this;
    function drawChart() {
      var data = google.visualization.arrayToDataTable(scope.data.chartData);

      var options = {
        legend: 'bottom',
        series: {
          0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
          1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
        }
      };

      var materialChart = new google.charts.Bar(document.getElementById(String(scope.elementId)));
      materialChart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
