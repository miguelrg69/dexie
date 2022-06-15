import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Obras, IObra } from '../../database';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  obra: any
  obraid: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("obraId")) {
        // redirect
        this.router.navigate(['/obras']);
      }
      const recipeId = Number(paramMap.get("obraId"));
      this.obraid = recipeId
      Obras.getObra(this.obraid).then((resultados) =>{ 
        this.obra = resultados
        console.log(this.obra)
      })
    });

    console.log(this.obraid)
  }

  async deleteObra(){
    const alertElement = await this.alertCtrl.create({
      header: 'Eliminar Obra',
      message:'¿Estas seguro de esto? No puedes deshacer los cambios',
      buttons:[
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text:'Eliminar de todas formas',
          handler: () => {
            Obras.deleteObra(this.obraid);
            this.router.navigateByUrl("/obras")
          }
        }
      ]
    });
    await alertElement.present();
  }

}
