import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OracoesService {
  oracoesRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase,
    private storage: AngularFireStorage) {
    this.oracoesRef = this.db.list('oracoes/');
  }


  getAll() {
    return this.oracoesRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }))
      })
    );
  }

  remove(key: string) {
    return this.oracoesRef.remove(key);
  }

}
