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
  // nft: Nft ={} as Nft;


  @Input() nft: Nft ={} as Nft;
  

  constructor(private _route: ActivatedRoute,
              private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges():void {

  }

  closeModal() {
    this.activeModal.close("Modal closed!");
  }


}
