import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms'
import { FirestoreService } from 'src/app/firestore.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  
  visible = [true, true];
  dismissible = true;
  taskForm!: FormGroup;
  eventList!:any;
  constructor(private firestoreService:FirestoreService ) {  }

  ngOnInit(): void {
    this.fetchEvents();
  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }
  fetchEvents(){
    this.firestoreService.fetchEvents().then((x:any)=>{
      this.eventList=x;
      console.log(this.eventList);
    });
  }
  handleFormSubmit(form: NgForm): void {
    // value will print the JavaScript Object of the Form Values.
    this.firestoreService.addEvent(form.value).then((x)=>{
      console.log(x);
    });
    console.log(form.value);
    }
}
