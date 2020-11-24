"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizacion = void 0;
class Organizacion {
    //static coordinaciones: Array<CompositeComponent>;
    //constructor 
    constructor(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace) {
        this._nombreCompany = nombreCompany;
        this._cedulaJuridica = cedulaJuridica;
        this._descripcion = descripcion;
        this._logoURL = logoURL;
        this._direccionWeb = direccionWeb;
        this._direccion = direccion;
        this._telefono = telefono;
        this._correo = correo;
        this._logoTwitter = logoTwitter;
        this._logoFace = logoFace;
    }
    //functions
    get nombreCompany() {
        return this._nombreCompany;
    }
    set nombreCompany(nombre) {
        this._nombreCompany = nombre;
    }
    get cedulaJuridica() {
        return this._cedulaJuridica;
    }
    set cedulaJuridica(cedula) {
        this._cedulaJuridica = cedula;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get logoURL() {
        return this._logoURL;
    }
    set logoURL(logoURL) {
        this._logoURL = logoURL;
    }
    get direccionWeb() {
        return this._direccionWeb;
    }
    set direccionWeb(web) {
        this._direccionWeb = web;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get correo() {
        return this._correo;
    }
    set correo(correo) {
        this._correo = correo;
    }
    get logoTwitter() {
        return this._logoTwitter;
    }
    set logoTwitter(logoTwitter) {
        this._logoTwitter = logoTwitter;
    }
    get logoFace() {
        return this._logoFace;
    }
    set logoFace(logoFace) {
        this._logoFace = logoFace;
    }
}
exports.Organizacion = Organizacion;
