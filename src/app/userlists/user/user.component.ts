import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/datasource/main.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private dataSource: MainService, private route: ActivatedRoute) { }
  private id: any;
  private sub: any;
  userData: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getUserInformation(this.id);
    });

  }

  getUserInformation(userId: string) {
    this.dataSource.getUser(userId).subscribe(
      data => { this.userData = data; console.log(data); }
    );
  }

}
