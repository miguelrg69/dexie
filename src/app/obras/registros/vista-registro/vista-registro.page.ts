import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registros } from 'src/app/database';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.page.html',
  styleUrls: ['./vista-registro.page.scss'],
})
export class VistaRegistroPage implements OnInit {

  registroId: any
  registro: any

  constructor(    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("registroId")) {
        // redirect
        this.router.navigate(['/obras']);
      }
      const recipeId = Number(paramMap.get("registroId"));
      this.registroId = recipeId
        
        registros.getReg(this.registroId).then((resultados)=>{
          this.registro = resultados
          console.log(this.registro)
        })
      })
  }

}
