import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {DataService } from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data:any;

  constructor(private route:ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.data = this.Obj.getById(id);
  }

}
