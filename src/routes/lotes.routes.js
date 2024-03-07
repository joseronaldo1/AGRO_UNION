import { Router } from "express";
import { Actualizarlote, Buscarlote, Desactivarlote, Registrarlotes, listarlotes } from "../controllers/lotes.controller.js";
import { validarlotes } from "../../validate/lotes.validacion.js";
import {validarToken} from "../controllers/autenticacion.js"

const rutalote = Router();

rutalote.get("/listarlote",validarToken, listarlotes);
rutalote.post("/Registrarlote",validarToken,validarlotes, Registrarlotes);
rutalote.put("/Actualizarlote",validarToken,validarlotes, Actualizarlote);
rutalote.get("/Buscarlote",validarToken, Buscarlote);
rutalote.delete("/desactivarlote",validarToken, Desactivarlote);


export { rutalote };