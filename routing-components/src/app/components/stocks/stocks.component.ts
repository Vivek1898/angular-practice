import { Component, OnInit } from '@angular/core';
import { IStocks } from 'src/app/models/IStocks';
import { StocksService } from 'src/app/services/stocks.service';
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
public Stocks:IStocks[]=[];
  constructor(private stocksService:StocksService) { }

  ngOnInit(): void {
    this.stocksService.getAllStocks().subscribe((data) =>{
      this.Stocks = data;
    },(error) =>{
      console.log(error);
    }
    )
  }

}
