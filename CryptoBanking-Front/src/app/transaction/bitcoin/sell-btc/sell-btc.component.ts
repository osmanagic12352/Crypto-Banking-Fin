import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { coinApiService } from 'src/app/shared/coinApi.service';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { TransactionService } from 'src/app/shared/transaction.service';
import { TransactionBsell } from 'src/app/shared/transactionB.model';

@Component({
  selector: 'app-sell-btc',
  templateUrl: './sell-btc.component.html',
  styles: [
  ]
})
export class SellBtcComponent implements OnInit {

  result: any;
  coinPrice: any = [];
  cardDetails: any;

  constructor(public service: TransactionService, private toastr: ToastrService, private price: coinApiService, public service_card: PaymentDetailService, public router: Router) { }

  ngOnInit(): void {
    this.btcPrice();
    this.cardInfo();
  }

  cardInfo(){
    this.service_card.List1Card().subscribe(
      (res) => {
        this.cardDetails = res;
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/card-insert']);
      }
    );
  }

  btcPrice() {
    this.price.coinsPriceBTC().then((res) => {
      this.result = res;
      this.coinPrice = this.result.bitcoin.usd;
      console.log(this.coinPrice);
    })
  }

  onSubmitB(form: NgForm) {
    if(confirm('Da li siguran da želiš izvršiti transakciju?')){
      this.service.postTransactionBp().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Uspješno!', 'Podnešen zahtjev za transakciju')

      },
      err => { console.log(err); }
    );}
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formDataBp = new TransactionBsell();
  }

}
