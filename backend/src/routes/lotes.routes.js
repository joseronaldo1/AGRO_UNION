import { Router } from "express";
import { Actualizarlote, Buscarlote, Desactivarlote, Registrarlotes, listarlotes } from "../controllers/lotes.controller.js";
import { validarlotes } from "../../validate/lotes.validacion.js";

const rutalote = Router();

rutalote.get("/listarlote", listarlotes);
rutalote.post("/Registrarlote",validarlotes, Registrarlotes);
//nesecita llamar id 
rutalote.put("/Actualizarlote",validarlotes, Actualizarlote);
rutalote.get("/Buscarlote", Buscarlote);

// creo que todos no estamos manejando delet solo put 
//para que desactiove no estamos eliminando como tal 
//pero comunicate con los compañeros y base de datos 
rutalote.delete("/desactivarlote", Desactivarlote);


export default rutalote ;

