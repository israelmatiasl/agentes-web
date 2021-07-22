import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';
import { Constants } from '../utils/constants';
import { Model } from '../utils/model';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T extends Model = Model> {

  constructor() {
  }

  public getAll(storage: string = Constants.STORAGE_DEFAULT) : T[] {
    let list = localStorage.getItem(storage);
    return !Utils.isNullOrEmpty(list) ? JSON.parse(list) as T[] : null;
  }

  public getOne(id: string, storage: string = Constants.STORAGE_DEFAULT) : T {
    let list = this.getAll(storage);
    return list.find(p => p.id == id);
  }

  public saveAll(list: T[], storage: string = Constants.STORAGE_DEFAULT) : void {
    localStorage.setItem(storage, JSON.stringify(list));
  }

  public saveOne(data: T, storage: string = Constants.STORAGE_DEFAULT) : T {
    let _list = this.getAll(storage) ?? [];
    if (data) {
      if (!data.id) {
        data.id = Utils.uuidv4();
      }
      _list.push(data);
    }
    localStorage.setItem(storage, JSON.stringify(_list));

    return data;
  }

  public updateOne(data: T, storage: string = Constants.STORAGE_DEFAULT) : T {
    let _list = this.getAll(storage) ?? [];
    if (data) {
      let index = _list.findIndex(p => p.id == data.id);
      if (index > -1) _list.splice(index, 1, data);
    }
    localStorage.setItem(storage, JSON.stringify(_list));
    return data;
  }
}
