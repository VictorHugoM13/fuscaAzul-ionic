import { EditaProdutoComponent } from './edita-produto/edita-produto.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProdutosComponent
  },
  {
    path: 'listar-produtos',
    component: ListarProdutosComponent
  },
  {
    path: 'edita-produto/:cod',
    component: EditaProdutoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
