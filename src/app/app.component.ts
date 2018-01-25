/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { createConnection, Connection } from "typeorm";

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
    //initialize connection
    createConnection().then(connection => {
      console.log("Database connection successful");
      //add routes

    }).catch(error => console.log(error))
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
