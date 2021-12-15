import { Component } from '@angular/core';
import { UserService } from './user.service';
import {Validators, FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  users:any;
  userdata:any;
newuser!:FormGroup;
userid:any;
  constructor(private us:UserService, private fb:FormBuilder){
    this.newuser=fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', Validators.required, Validators.email],
      avatar:['', Validators.required],
      // first_name:['', Validators.required],
    })
  }

ngOnInit(){
  this.getusers();
}
  getusers(){
    this.us.getallusers().subscribe((res:any)=>{
this.users=res;
    })
  }
  editUser(user:any, id:any){
    this.us.getwithid(id).subscribe((res:any)=>{
      this.userid=res.id;
   
      this.newuser.patchValue({
        first_name:res.first_name,
        last_name:res.last_name,
        email:res.email,
        avatar:res.avatar

      })
    
      
      
  })
}



  deleteUser(id:any){
    this.us.deletewithis(id).subscribe(res=>{
      alert("user deleted")
    })
  }

  onSubmit(){
this.userdata=this.newuser.value;
this.addnewuser(this.userdata);
  }
  addnewuser(user:any){


    if(this.userid==null){

      this.us.addnewuser(user).subscribe(res=>{
        alert("new user added successfully")
      })
     
    } 

    else{
    
      this.us.updateuser( this.userid,user).subscribe(res=>{
        alert("user updated")
    

  })
   
  }

  }
}