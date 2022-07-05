import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Nft } from 'src/app/models/Nfts';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit {

  nft: Nft = {} as Nft;
  data: string = '';

  constructor(private _route: ActivatedRoute,
              private activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    // this.modal.open(contenido,{size:'xl',centered:true, scrollable:true})
    // this.data = this._route.snapshot.paramMap.get('data')!;
    // this.nft = JSON.parse(this.data);
    // console.log(this.nft.name)
    
  }

  openModal(contenido:any){
    
  }

  closeModal(){
    this.activeModal.close("Modal closed!");
  }

}
