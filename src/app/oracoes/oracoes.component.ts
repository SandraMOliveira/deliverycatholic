import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OracoesService } from './shared/oracoes.service';

@Component({
  selector: 'app-oracoes',
  templateUrl: './oracoes.component.html',
  styleUrls: ['./oracoes.component.scss']
})
export class OracoesComponent implements OnInit {
oracoes: Observable<any[]>;


  constructor(private oracoesService: OracoesService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.oracoes = this.oracoesService.getAll();
  }

  remover(key: string) {
    this.oracoesService.remove(key)
    .then((mensagem) => {
      this.toastr.success('Pedido excluído com sucesso!!!');
    })
    .catch ((mensagem: string) => {
      this.toastr.error(mensagem);
    });
  }


}
