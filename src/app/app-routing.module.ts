import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'obras',
    pathMatch: 'full'
  },
  {
    path: 'obras',
    children: [
      {
        path: "",
        loadChildren: () => import('./obras/obras.module').then( m => m.ObrasPageModule)
      },
      {
        path: ":obraId",
        children: [
          {
            path: "",
            loadChildren: () => import('./obras/registros/registros.module').then(m => m.RegistrosPageModule)
          },
          {
            path:":registroId",
            loadChildren: () => import('./obras/registros/vista-registro/vista-registro.module').then(m => m.VistaRegistroPageModule)
          }
          
        ]
      }
    ]
  },
  {
    path: 'new-obra',
    loadChildren: () => import('./obras/obra-add/obra-add.module').then(m => m.ObraAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
