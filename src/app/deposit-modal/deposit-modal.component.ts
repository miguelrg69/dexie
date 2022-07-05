import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { Iregistro, registros } from '../database';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent implements OnInit {
  @Input() titulo:string
  @Input() id: number
  @Input() registros: Iregistro

  placasU: string
  camionLlegada: string
  camionCarga: string
  camionDescargando: string
  camionDescargado: string
  firma: string

  constructor(private modalCtrl: ModalController,private camera: Camera,private router: Router) { }

  ngOnInit() {
  }
  dismissModal(){
    this.modalCtrl.dismiss()
  }

  getPlacas(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imagePlacas)=>{
      let base64placas = 'data:image/jpeg;base64,'+imagePlacas
      this.placasU = base64placas

    }).catch(err => console.log(err))
  }

  getllegada(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imagellegada)=>{
      let base64llegada = 'data:image/jpeg;base64,'+imagellegada
      this.camionLlegada = base64llegada

    }).catch(err => console.log(err))
  }
  
  getCarga(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imagecarga)=>{
      let base64carga = 'data:image/jpeg;base64,'+imagecarga
      this.camionCarga = base64carga

    }).catch(err => console.log(err))
  }

  getDescarga(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageDescarga)=>{
      let base64descarga = 'data:image/jpeg;base64,'+imageDescarga
      this.camionDescargando = base64descarga

    }).catch(err => console.log(err))
  }

  getCdescargado(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageCdescargado)=>{
      let base64Cdescargado = 'data:image/jpeg;base64,'+imageCdescargado
      this.camionDescargado = base64Cdescargado

    }).catch(err => console.log(err))
  }

  getFirma(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageFirma)=>{
      let base64Firma = 'data:image/jpeg;base64,'+imageFirma
      this.firma = base64Firma

    }).catch(err => console.log(err))
  }

  addRegistro(placasT: HTMLInputElement, FechaHora: HTMLInputElement,Tmaterial: HTMLInputElement, cantidad: HTMLInputElement, unidadMed: HTMLSelectElement, hora: HTMLInputElement){
    let newRegistro = new registros(placasT.value, 
      this.placasU, 
      FechaHora.value, 
      Tmaterial.value, 
      cantidad.value, 
      unidadMed.value, 
      this.camionLlegada, 
      this.camionCarga, 
      this.camionDescargando,
       this.camionDescargado, 
       hora.value, 
       this.firma, 
       this.id)
    newRegistro.saveR()
    window.location.reload();
  }
}
