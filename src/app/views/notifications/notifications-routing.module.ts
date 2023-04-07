import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { AlertsComponent } from './alerts/alerts.component';
 
 

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notifications'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'badges'
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        data: {
          title: 'Alerts'
        }
      },
      
      
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
