import { Component , OnInit } from '@angular/core';
import 'rxjs/Rx';
import {FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
userProfileForm=new FormGroup({
  firstName :new FormControl('', Validators.required, ),
  lastName :new FormControl('',Validators.required,),
  age :new FormControl('', Validators.required,),
  email:new FormControl('', Validators.email),
      address:new FormGroup({
        address1 :new FormControl('',Validators.required,),
        address2 :new FormControl('',Validators.required,),
        PIN :new FormControl('',Validators.required,),
        CITY :new FormControl('',Validators.required,),
       })


});

MyVersion='';
// email=new FormControl('');

 //updateEmail(){
  // this.email.setValue('arup@qafriend.com');
// }
onSubmit(){
  console.warn(this.userProfileForm.value);
  console.warn(this.userProfileForm.controls['firstName'].value);
  console.warn(this.userProfileForm.get('firstName').value);
  console.warn(this.userProfileForm.get(['address','address1']).value);
  console.warn(this.userProfileForm.get('address').get('address1').value);
 }
 ngOnInit() {
 }

 

}


