import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MyInterestService } from 'src/app/my-interest.service';

@Component({
  selector: 'app-myinterest',
  templateUrl: './myinterest.component.html',
  styleUrls: ['./myinterest.component.css']
})
export class MyinterestComponent implements OnInit {
  p: number = 1;
  myinterestobj: any;
  search: any;
  modalService: any;
  closeResult= '';
  shortlistobj: any;
  constructor(private myinterestservice: MyInterestService,private router:Router) { 
    this.myinterestservice.getmyinterestdata().subscribe((myinterestobj) => {
      console.log(myinterestobj);
      this.myinterestobj = myinterestobj;
    });
  }  




  ngOnInit(): void {
  }
 addMember(){
  this.router.navigateByUrl('/admin/addmembers');
 }

 viewProfile(id:any){
   console.log(id);
   this.router.navigate(['/admin/viewprofile', id])
 }

 open(content: any) {
  this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then(
      (result: any) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
//delete member 
delete(element: any){
  // let data=this.allmembersobj.value;
  // this.router.navigate(['./admin/deletedmembers']),
  // {
  //   queryParams:{data:this.allmembersobj}
  // }

  // this.allmembers.sendData(this.allmembersobj);

  this.shortlistobj.forEach((value: any,index: any)=>{
    if(value==element)
    this.shortlistobj.splice(index,1);
    this.modalService.dismissAll();
  });
  }
}
