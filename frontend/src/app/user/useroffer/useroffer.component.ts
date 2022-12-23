import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-useroffer',
  templateUrl: './useroffer.component.html',
  styleUrls: ['./useroffer.component.css']
})
export class UserofferComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
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
