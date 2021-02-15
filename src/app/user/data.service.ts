import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lastId:any;

  models = [
    {id:1, name:"airpod I-7", price:20, desc:"So good product high quality 5 hours batter", img:"https://tse4.mm.bing.net/th?id=OIP.2LKrHqKeCpQ14TBowc1JbwHaEK&pid=Api&P=0&w=309&h=175"},
    {id:2, name:"airpod I-8", price:30, desc:"So good product high quality 12 hours batter", img:"https://tse2.mm.bing.net/th?id=OIP.FWP_S0GKMUVml47-ZMG_4gHaEK&pid=Api&P=0&w=280&h=158"},
    {id:3, name:"airpod I-9", price:40, desc:"So good product high quality 12 hours batter", img:"https://asiatrend.org/wp-content/uploads/2020/06/Huge-airpod_a.jpg"},
    {id:4, name:"airpod I-10", price:50, desc:"So good product high quality 12 hours batter", img:"https://tse3.mm.bing.net/th?id=OIP.sKbt4jdLtW_Ah9sjVt7-sgHaDx&pid=Api&P=0&w=374&h=191"},
    {id:5, name:"airpod I-11", price:60, desc:"So good product high quality 12 hours batter", img:"https://tse1.mm.bing.net/th?id=OIP.6KwwlSCLL0-OE0ZezPxteQHaEK&pid=Api&P=0&w=326&h=184"},
    {id:6, name:"airpod I-12", price:70, desc:"So good product high quality 12 hours batter", img:"https://tse3.mm.bing.net/th?id=OIP.IRXz-aKoqnlAXWwQBpVXSAEPDm&pid=Api&P=0&w=189&h=161"},
    {id:7, name:"airpod I-13", price:100, desc:"So good product high quality 12 hours batter", img:"https://tse2.mm.bing.net/th?id=OIP.Uhv4jT8UnKWDmIq3QgZ6JgEsCo&pid=Api&P=0&w=290&h=164"},
  ]
  constructor() { }

  getAll(){
    return this.models;
  }
  getById(id:any): any{
    for (let i = 0; i < this.models.length; i++) {
      if (id == this.models[i]['id']) {
        return this.models[i];
      }
      
    }
  }
  AddProd(name:any, Price:number, description:any, image:any){
    for (let i = 0; i < this.models.length; i++) {
        this.lastId = this.models[i]['id'];
    }
    this.models.push({id:this.lastId, name:name, price:Price, desc:description, img:image});
    console.log(this.models);
  }
}
