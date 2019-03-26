import { Component, OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [SampleService]
})
export class SampleComponent implements OnInit {

  pageName = 'Sample';
  sampleData = '';

  constructor(private sampleService: SampleService) { }

  ngOnInit() {

    this.sampleService.getSampleData()
    .subscribe(data => {
      this.sampleData = JSON.stringify(data, null, 2);
    });
  }

}

