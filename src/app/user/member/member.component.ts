import { Component, OnInit } from '@angular/core';

import {DataService } from '../data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  data:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.getAll();
  }

}
