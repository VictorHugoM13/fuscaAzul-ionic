import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss'],
})
export class EditaProdutoComponent implements OnInit {

  public cod : string;
  public produto : Produto;
  public qtdVerificar: number;
  

  constructor(public alertCtrl: AlertController, private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cod = this.route.snapshot.paramMap.get('cod');
    let produtos: Array<Produto> = this.produtoService.getProdutos();
    for (let i=0; i < produtos.length; i++) {
      if (produtos[i].cod === this.cod) {
        this.produto = produtos[i];
      }    
    }
    if (this.produto === undefined) {
      this.router.navigate(['/listar-produtos']);
    }
  }

  onSubmit(form:any) {
    this.produto.cod = form.value.cod;
    this.produto.qtdDisponivel = form.value.qtdDisponivel;
    this.produto.capMaxima = form.value.capMaxima;
    this.produto.qtdMinima = form.value.qtdMinima;
    this.produto.qtdDisponivel = form.value.qtdDisponivel;

    this.produtoService.editProduto(this.cod, this.produto);
    this.router.navigate(['/listar-produtos']);
  }

  onAdd(form:any) {
    this.produto.qtdAtualizar = form.value.qtdAtualizar;
    this.produto.qtdDisponivel = form.value.qtdDisponivel;
    this.produto.capMaxima = form.value.capMaxima;
    this.qtdVerificar = this.produto.qtdDisponivel + this.produto.qtdAtualizar;

    if (this.produto.qtdAtualizar === undefined) {
       const alert = this.alertCtrl.create({
        message: 'Digite uma quantidade!',
        subHeader: 'Atenção',
        buttons: ['Ok']
       });
       alert.then(alert => alert.present());;
    }
    else {
      if (this.qtdVerificar<=this.produto.capMaxima) {
        this.produto.qtdDisponivel += this.produto.qtdAtualizar;
        this.router.navigate(['/listar-produtos']);
        
      }
      else {
        const alert = this.alertCtrl.create({
          message: 'Quantidade Excedida!',
          subHeader: 'Atenção',
          buttons: ['Ok']
         });
         alert.then(alert => alert.present());;
      }
    }
  }

  onDelete(form:any) {
    this.produto.qtdAtualizar = form.value.qtdAtualizar;
    this.produto.qtdDisponivel = form.value.qtdDisponivel;
    this.qtdVerificar = this.produto.qtdDisponivel - this.produto.qtdAtualizar;

    if (this.produto.qtdAtualizar === undefined) {
      const alert = this.alertCtrl.create({
        message: 'Digite uma quantidade!',
        subHeader: 'Atenção',
        buttons: ['Ok']
       });
       alert.then(alert => alert.present());;
    }
    else {
      if (this.qtdVerificar>this.produto.qtdMinima) {
        this.produto.qtdDisponivel -= this.produto.qtdAtualizar;
        this.router.navigate(['/listar-produtos']);
      }
      else {
        const alert = this.alertCtrl.create({
          message: 'Quantidade Incorreta!',
          subHeader: 'Atenção',
          buttons: ['Ok']
         });
         alert.then(alert => alert.present());;
      }
    }  
  }      
}
