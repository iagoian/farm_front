import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/models/Owner';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-register-farm',
  templateUrl: './register-farm.component.html',
  styleUrls: ['./register-farm.component.scss']
})
export class RegisterFarmComponent implements OnInit {
  
  public farm: Farm = {
    name: '',
    geometry: undefined,
    area: 0,
    centroid: [],
    owner: new Owner(),
  };
  
  constructor(
    private farmService: FarmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createfarm(farm: FarmService) {
    this.farmService.register(this.farm);
    this.router.navigateByUrl('/list-farm');
  }
}
