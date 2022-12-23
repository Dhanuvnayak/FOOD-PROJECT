import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-emptycart',
  templateUrl: './emptycart.component.html',
  styleUrls: ['./emptycart.component.css']
})
export class EmptycartComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private cartService:CartService) { }

  ngOnInit(): void {
    this.check()
  }


  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);

      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])
                }
        console.log(error);
      }
    )
  }

}
