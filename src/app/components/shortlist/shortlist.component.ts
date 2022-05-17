import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShortlistService } from 'src/app/shortlist.service';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent implements OnInit {

  p: number = 1;
  isPremium: boolean = true;
  badgeClasses = ['badge badge-inline badge-success', ' badge badge-inline badge-info'];
  activeMembership = { ' badge badge-inline badge-success': !this.isPremium, ' badge badge-inline badge-info': this.isPremium }

  shortlistobj: any;


  search: any;
  // deletedmembersobj: any;
  constructor(private shortlistservice: ShortlistService, private router: Router, private modalService: NgbModal) {
    this.shortlistservice.getshortlistdata().subscribe((shortlistobj: any) => {
      console.log(shortlistobj);
      this.shortlistobj = shortlistobj;
    });
  }


  closeResult = '';

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


  viewProfile(id: any) {
    console.log(id);
    this.router.navigate(['/admin/viewprofile', id])
  }

  todelete(element: any) {
    console.log('delete btn');
    
    this.shortlistobj.forEach((value: any, index: any) => {
      if (value == element) this.shortlistobj.splice(index, 1);
      this.modalService.dismissAll();
    });
  }
}
