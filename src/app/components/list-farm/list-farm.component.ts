import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/Farm';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-list-farm',
  templateUrl: './list-farm.component.html',
  styleUrls: ['./list-farm.component.scss']
})
export class ListFarmComponent implements OnInit {

  farms: Farm[] = [];

  constructor(
    private farmeService: FarmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.farms = this.farmeService.list();
  }

  nav(){
    this.router.navigateByUrl("components/register-farm");
  }
}
