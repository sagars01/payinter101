import { Component, OnInit } from '@angular/core';
import { MainService } from '../datasource/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})
export class UserlistsComponent implements OnInit {

  constructor(private dataSource: MainService, private router: Router) { }

  usersdata: any;
  paginationLength: number[];

  ngOnInit() {
    this.getUserdataList();
  }

  getUserdataList(pageNum?) {
    this.dataSource.getUserList(pageNum).subscribe(
      (data: any) => {
        this.usersdata = data.data;
        console.log(data);
        this.paginationLength = Array(5).fill(5).map((x, i) => i);
      }
    );
  }

  onUserClick(userId: string | number) {
    this.router.navigate(['user', userId]);
    console.log(userId);
  }
}
