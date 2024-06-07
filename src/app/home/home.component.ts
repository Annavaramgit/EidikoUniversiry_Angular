import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Chart ,registerables}from 'chart.js/auto'
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
constructor(){}
  ngOnInit(): void {
    this.createChart();
  }

  // @ViewChild('piechart', { static: true }) 'piechart': ElementRef<HTMLCanvasElement>;
createChart(){
  const ctx = document.getElementById('piechart');

  new Chart('piechart', {
    type: "pie",
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor:[
          // 'rgba(255,99,132,0.2)',
          // 'rgba(54,162,235,0.2)',
          // 'rgba(255,206,86,0.2)',
          // 'rgba(75,192,192,0.2)',
          'yellow',
          'green',
          'red',
          'black'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


}


}
