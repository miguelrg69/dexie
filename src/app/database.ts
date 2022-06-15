import { IonTabBarCustomEvent } from "@ionic/core";
import Dexie from "dexie";

export class obrasDB extends Dexie{
    obras: Dexie.Table<IObra,number>
    constructor(){
        super("obrasDB");

        this.version(1).stores({
            obras: '++id, titulo, imageURL'
        })


        this.obras.mapToClass(Obras)
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