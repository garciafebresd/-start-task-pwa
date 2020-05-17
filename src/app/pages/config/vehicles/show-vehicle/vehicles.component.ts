import { Component, OnInit } from '@angular/core';
import { TransportsService } from '../../../../services/transports/transports.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styles: []
})
export class VehiclesComponent implements OnInit {

  constructor(private transportsService: TransportsService) { }

  ngOnInit(): void {

    this.transportsService.getTransports().subscribe((response) => {

      console.log('getTransports() => ', response);
    });


    this.transportsService.getTransportTypes().subscribe((response) => {

      console.log('getTransportTypes() => ', response);
    });

    this.transportsService.getTransport(76).subscribe((response) => {

      console.log('getTransport() => ', response);
    });

  }

}
