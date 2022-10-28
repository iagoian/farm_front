import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Owner } from 'src/app/models/Owner';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';

export interface farm {
  name: '',
  geometry: undefined,
  area: 0,
  centroid: [],
  owner: Owner,
}

@Component({
  selector: 'app-register-farm',
  templateUrl: './register-farm.component.html',
  styleUrls: ['./register-farm.component.scss']
})
export class RegisterFarmComponent implements OnInit {

  farms: Farm = new Farm();

  public farm: Farm = {
    name: '',
    geometry: undefined,
    area: 0,
    centroid: [],
    owner: new Owner(),
  };

  constructor(
    private farmService: FarmService,
    private router: Router,
    private formFarm: FormGroup,
  ) { }

  ngOnInit(): void {
  //   this.createFarm(Farm: farmService);
  }

  createfarm(farm: FarmService) {
    this.farmService.register(this.farm);
    this.router.navigateByUrl('/list-farm');
  }
  // createFarm(farm: FarmService) {
  //   this.farmService.register(this.farm){
  //     nome: (farm.nome);
  //     geometry: (farm.geometry);
  //     area: (farm.area);
  //     centroid: (farm.centroid);
  //     owner: (farm.owner)
  //   })
  // }
  // nav() {
  //   this.router.navigateByUrl("components/list-farm");
  // }
}

