import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obras } from '../database';


@Component({
  selector: 'app-obras',
  templateUrl: './obras.page.html',
  styleUrls: ['./obras.page.scss'],
})
export class ObrasPage implements OnInit {

  obras: any

  constructor( private router: Router) { }
  ngOnInit(): void {
    this.loadObras()
  }

  ionViewWillEnter(){
    this.loadObras()
  }

  loadObras(){
    Obras.allObras().then((resultados) =>{ 
      this.obras = resultados
      console.log(this.obras)
    })
  }

  addNewObra() {
    this.router.navigate(['/new-obra']);
  }

}
