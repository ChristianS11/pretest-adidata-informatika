import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';  

@Component({
  selector: 'pretest-chart',
  standalone: true,
  imports: [CommonModule, jqxBarGaugeModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  values: number[] = [102, 115, 130, 137];
}
