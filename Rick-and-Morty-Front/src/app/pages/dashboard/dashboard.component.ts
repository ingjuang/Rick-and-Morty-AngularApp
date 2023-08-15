import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private service = inject(ServiceService)


  href: string ="";
  $apiResponse!: any;
  $apiResults!: any;
  $filterName: any[] = [];
  $filterStatus: any[] = [];
  $filterType: any[] = [];
  filter: string= '';
  filtering: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
        this.href = this.router.url;
        console.log(this.router.url);
        this.getData()
  }


  async getData(){
    this.$apiResponse = await this.service.getInitalData(this.href)
    this.$apiResults = this.$apiResponse.results
  }

  async getDataPagination(url: string){
    this.$apiResponse = await this.service.getDataPagination(url)
    this.$apiResults = this.$apiResponse.results
    console.log(this.$apiResponse);
  }

  async getDataByFind(){
    try {
      let withNames: any = await this.service.getDataByName(`?name=${this.filter}`, this.href);
      if(withNames){
        this.$filterName = withNames.results;
      }
    } catch (error) {
      this.$filterName = []
    }

    try {
      let withStatus: any = await this.service.getDataByStatus(`?status=${this.filter}`, this.href);
      if(withStatus){
        this.$filterStatus = withStatus.results;
      }
    } catch (error) {
      this.$filterStatus = []
    }

    try {
      let withType: any = await this.service.getDataByType(`?type=${this.filter}`, this.href);
      if(withType){
        this.$filterType = withType.results;
      }
    } catch (error) {      
      this.$filterStatus = []
    }
    this.$apiResults = [...this.$filterName, ...this.$filterStatus, ...this.$filterType]
    this.filtering = true
    if(!this.filter){
      await this.getData();
      this.filtering = false
    }
  }
}