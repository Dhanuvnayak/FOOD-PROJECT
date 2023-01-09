
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';



@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {
  msg: any = [];
  avail!: boolean;
  onefood: any;
  foodname!: any[];
  foodprice!: any;
  pn: any;
  ps: any;
  pp: any;
  id: any;
  image;
  constructor(private http: HttpClient, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.check()
    this.onefood = this.adminService.temp;

    this.foodname = this.onefood?.foodname;
    this.foodprice = this.onefood?.foodprice;
    this.id = this.onefood?._id;
  }

  check() {
    this.adminService.check().subscribe(
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
    // console.log();
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.msg = "something went  wrong!!";
      this.avail = true;
      return;
    }
    const formData = new FormData();
    formData.append('id', this.id);

    if (f.controls.foodprice.value) {
      // console.log("yes price");
      formData.append('foodprice', f.controls.foodprice.value);
      this.pp = f.controls.foodprice.value;
    }
    else {
      // console.log("no price");
      formData.append('foodprice', this.foodprice);
      this.pp = this.foodprice;
    }


    if (f.controls.foodpic.value) {
      // console.log("yes image");
      formData.append('file', this.image);

      // *************
      this.http.post<any>('http://localhost:3000/admin/editfoodwithimage', formData).subscribe(
        (res) => {
          this.adminService.avail = true;
          this.adminService.msg = "Successfully Edited a food!!!"
          this.router.navigate(['/admin']);
          console.log(res)
        }
        ,
        (error) =>{

          if(error instanceof HttpErrorResponse)
          {

              this.router.navigate(['/login'])

          }
          console.log(error);
        }
      );

    }
    else {

      this.http.get<any>('http://localhost:3000/admin/editfoodwithoutimage?id=' + this.id + '&foodname=' + this.pn + '&foodprice=' + this.pp
      ).subscribe(
        (res) => {
          this.adminService.avail = true;
          this.adminService.msg = "Successfully Edited a food!!!"
          this.router.navigate(['/admin']);
          console.log(res)
        }
        ,
        (error) =>{

          if(error instanceof HttpErrorResponse)
          {
              this.router.navigate(['/login'])

          }
          console.log(error);
        }
      );
    }


  }


  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
}
