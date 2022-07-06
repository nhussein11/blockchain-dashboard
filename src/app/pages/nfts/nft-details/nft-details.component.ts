import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Nft } from 'src/app/models/Nfts';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit,OnChanges {
  data: string = '';
  nft: Nft ={} as Nft;


  @Input() _nft: Nft ={} as Nft;
  

  constructor(private _route: ActivatedRoute,
              private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this._nft)
    this.nft = this._nft  

  }

  ngOnChanges():void {
    // console.log(this.nft)    
  }

  closeModal() {
    this.activeModal.close("Modal closed!");
  }


}
