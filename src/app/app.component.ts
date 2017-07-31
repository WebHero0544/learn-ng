import { Component, OnInit} from '@angular/core';
import { LoggerService } from './common/service/logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '学习angular4.0';

  constructor(private logger: LoggerService) { 
  	this.logger.log('constructor');
  }
  ngOnInit() {
  	this.log('ngOnInit');
  }
  log(msg: any){
  	this.logger.log(msg);
  }
}
