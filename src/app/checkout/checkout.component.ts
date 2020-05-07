import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{Router}  from '@angular/router';
import {product} from '../product'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private dataservice: DataService, private router : Router, private modalService: NgbModal) { }
productAddedToCart:product[]=[] 
allTotal: Number;
closeResult ='';
  ngOnInit(): void {
this.productAddedToCart= this.dataservice.getProductFromCart();
this.calculteAllTotal(this.productAddedToCart);
  }


  removeall(){
    this.dataservice.removeAllProductFromCart();
    this.dataservice.getProductFromCart();
    this.router.navigateByUrl('/ProPage')
  }


  calculteAllTotal(allItems:product[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].Quantity *allItems[i].productPrice);
   }
   this.allTotal=total;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

}
