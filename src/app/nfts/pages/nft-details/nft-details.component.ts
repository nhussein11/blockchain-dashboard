import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { DomSanitizer } from '@angular/platform-browser';
import { Nft } from '../../models/Nfts';
@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit, OnChanges {
  data: string = '';
  @Input() nft: Nft = {} as Nft;

  constructor(
    private activeModal: NgbActiveModal,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

  closeModal() {
    this.activeModal.close("Modal closed!");
  }

  getSantizeUrl(url: string | undefined) {
    if (url) {
      return this._sanitizer.bypassSecurityTrustUrl(url);
    } else { return; }
  }
}
