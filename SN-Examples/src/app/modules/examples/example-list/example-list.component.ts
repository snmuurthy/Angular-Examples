import { DataServiceService } from './../service/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit {

  topics:any = [];
  constructor(
    private dataService: DataServiceService
  ) { 
    this.dataService.getTopics().subscribe((response) => {
      this.topics = response;
    })
  }

  ngOnInit(): void {
  }

}
