import { Model } from "../utils/model";
import { Utils } from "../utils/utils";

export class Sede extends Model {
  public id           : string;
  public agencia      : string;
  public distrito     : string;
  public provincia    : string;
  public departamento : string;
  public direccion    : string;
  public latitud      : number;
  public longitud     : number;

  constructor() {
    super();
  }

  buildFromData(agencia: string, distrito: string, provincia: string, departamento: string, direccion: string, latitud: number, longitud: number) : Sede {
    this.id             = Utils.uuidv4();
    this.agencia        = agencia;
    this.distrito       = distrito;
    this.provincia      = provincia;
    this.departamento   = departamento;
    this.direccion      = direccion;
    this.latitud        = latitud;
    this.longitud       = longitud;

    return this;
  }
}
