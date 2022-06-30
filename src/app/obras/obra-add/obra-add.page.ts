import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obras, } from 'src/app/database';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-obra-add',
  templateUrl: './obra-add.page.html',
  styleUrls: ['./obra-add.page.scss'],
})
export class ObraAddPage implements OnInit {

  imageData: string
  model: Obras

  constructor(private router: Router,private camera: Camera) { }

  ngOnInit() {
  }

  saveObra(title: HTMLInputElement) {
    let newObra = new Obras(title.value,this.imageData)
    newObra.save()
    this.router.navigate(['/obras']);
    
  }
  getPhoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData)=>{
      let base64image = 'data:image/jpeg;base64,'+imageData
      this.imageData = base64image

    }).catch(err => console.log(err))
  }
}
