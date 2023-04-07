import { Component, OnChanges, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { FirestoreService } from 'src/app/firestore.service';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(public chartsData: DashboardChartsData, private firestoreService:FirestoreService) {
  }

  public users: any = []
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
 
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
   
    this.initCharts();
    this.getAllusers();
  }
  

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
    
  }
   getAllusers(){
     
     this.firestoreService.getAllUsers().then((result)=>{
     this.users=result,
     
     console.log(this.users);});
     
   
  }
  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
