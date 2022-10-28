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

  farms: Farm = new Farm();
  farmsArr: Array<Farm> = new Array<Farm>();

  constructor(
    private farmeService: FarmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getfarms()
  };

  getfarms(){
    this.farmeService.listAll().subscribe(response => {
      for(let i of response){
        this.farms.name = i.name;
        this.farms.area = i.area;
        this.farms.centroid = i.centroid;
        this.farms.geometry = i.geometry;
        this.farms.owner = i.owner;
      }
      this.farmsArr.push(this.farms)
      console.log(this.farmsArr)
    })
  }

  listfarm(): string[] {
    return ['name', 'geometry', 'area', 'centroid', 'owner'];
  }

  // delete(farm: number) {
  //   for(let i=0; i<=this.farmsArr.length-1; i++){
  //     if(this.farmsArr[i].id == farm){
  //       this.farmsArr.splice(i,1)
  //     }
  //   }
  // }

  nav() {
    this.router.navigateByUrl("components/register-farm");
  }
}
