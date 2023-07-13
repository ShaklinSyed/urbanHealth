import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  allData: any;

  public constructor(private http: HttpClient){

  }

  public ngOnInit(): void {

    let url = "/assets/data.json";
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.allData = data.elements;
    })
  }
}
