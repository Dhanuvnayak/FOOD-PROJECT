import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  foods!: any[];
  constructor(private router: Router, private authService: AuthService, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.authService.avail) {
      this.toastr.success(this.authService.msg, '', {
        timeOut: 2000,
        closeButton: true
      });
    }
    this.authService.avail=false;
    this.authService.msg="";
    this.check()
    this.readFood()
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


  readFood() {
    this.authService.getAllFood().subscribe(
      data => {
        this.foods = data['msg'];

      },
      error => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )

  }
  addtocart(food) {

    food.qty=1;
    this.cartService.addFood(food).subscribe(
      data=>
      {

        console.log(data);
          this.toastr.success('Food Added to the cart', '', {
            timeOut: 2000,
            closeButton: true
          });
      },
      error=>
      {
        console.log("error");
      }
    )
    // window.location.reload();

  }



}
