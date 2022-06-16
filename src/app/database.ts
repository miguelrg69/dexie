import { IonTabBarCustomEvent } from "@ionic/core";
import Dexie from "dexie";

export class obrasDB extends Dexie{
    obras: Dexie.Table<IObra,number>
    registros: Dexie.Table<Iregistro,number>
    constructor(){
        super("obrasDB");

        this.version(1).stores({
            obras: '++id, titulo, imageURL',
            registros: '++id, placasT, placasURL, fechaHora, cantidad, material, camionLlegada, camionCargado, camionDescargando, camionDescargado, hora, firma, unidadMed, obraId -> obras.id'
        })


        this.obras.mapToClass(Obras)
    }

}

export interface Iregistro{
    //llegada del camion
    id?: number,
    placas: string,
    placasURL:string,
    fechaHora: string,
    material: string,
    cantidad: number,
    unidadMed: string
    //registro del suministro
    camionLlegada: string,
    camionCargado: string,
    camionDescargando: string,
    camionDescargado: string,
    hora: string,
    //confirmacion del registro
    firma: string
    obraId: number
}

export class registros implements Iregistro{
        //llegada del camion
        id?: number;
        placas: string;
        placasURL:string;
        fechaHora: string;
        material: string;
        cantidad: number;
        unidadMed: string;
        //registro del suministro
        camionLlegada: string;
        camionCargado: string;
        camionDescargando: string;
        camionDescargado: string;
        hora: string;
        //confirmacion del registro
        firma: string;
        obraId: number;
        constructor(placas: string,
            placasURL:string,
            fechaHora: string,
            material: string,
            cantidad: number,
            unidadMed: string,
            //registro del suministro
            camionLlegada: string,
            camionCargado: string,
            camionDescargando: string,
            camionDescargado: string,
            hora: string,
            //confirmacion del registro
            firma: string,
            obraId: number, id?: number){

                this.placas = placas
                this.placasURL = placasURL
                this.fechaHora = fechaHora
                this.material = material
                this.cantidad = cantidad
                this.unidadMed = unidadMed
                this.camionLlegada = camionLlegada
                this.camionDescargando = camionDescargando
                this.camionCargado = camionCargado
                this.camionDescargado = camionDescargado
                this.hora = hora
                this.firma = firma
                this.obraId = obraId
            }

            saveR(){
                return db.registros.add(this)
            }
}

export interface IObra{
    
    id?: number;
    titulo: string;
    imageURL: string
}

export class Obras implements IObra{
    id?: number;
    titulo: string;
    imageURL: string

    constructor (titulo: string, imageURL: string,id?: number,){
        this.titulo = titulo
        this.imageURL = imageURL

        if(id) this.id = id;
    }
    save(){
        return db.obras.add(this)
    }

    static allObras(){
        //all devuelve todas las obras
        //return a promise
        return db.obras.orderBy("id").reverse().toArray()
    }

    static getObra( obraId: number){
        return db.obras.where("id").equals(obraId).toArray()
    }

    static deleteObra( obraId: number){
        db.obras.delete(obraId)
    }
}

export let db = new obrasDB();