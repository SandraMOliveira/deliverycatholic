import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OracoesService {

  oracoesRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
                this.oracoesRef = this.db.list('oracoes/')
               }
}

public getAll() {
  return this.oracoesRef.snapshotChanges().pipe(
    map(changes => {
      return changes.map(m => ({ key: m.payload.key, ...matchMedia.payload.val() }))
    })
  )
}

remove(key: string) {
  return this.oracoesRef.remove(key);
}
