import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { Iregistro, registros } from '../database';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent implements OnInit {
  @Input() titulo:string
  @Input() id: number
  @Input() registros: Iregistro

  placasT= new FormControl('', Validators.required)
  placasU = new FormControl('', Validators.required)
  FechaHora = new FormControl('', Validators.required)
  Tmaterial = new FormControl('', Validators.required)
  cantidad = new FormControl('', Validators.required)
  unidadMed = new FormControl('', Validators.required)
  CamionLlegada = new FormControl('', Validators.required)
  camionCarga = new FormControl('', Validators.required)
  camionDescargando = new FormControl('', Validators.required)
  camionDescargado = new FormControl('', Validators.required)
  hora = new FormControl('', Validators.required)
  firma = new FormControl('', Validators.required)

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
    let newRegistro = new registros("xdxd","xdxd","xdxd","cal",14,"metros","xdxd","","","","","",this.id)
  }
  dismissModal(){
    this.modalCtrl.dismiss()
  }
}
