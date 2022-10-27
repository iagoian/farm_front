import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/Farm';

@Component({
  selector: 'app-register-farm',
  templateUrl: './register-farm.component.html',
  styleUrls: ['./register-farm.component.scss']
})
export class RegisterFarmComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }

  salvarDados(){
    // this.route.navigate(['/list'])
  }
  ownerId() {
    throw new Error('Method not implemented.');
  }

}
