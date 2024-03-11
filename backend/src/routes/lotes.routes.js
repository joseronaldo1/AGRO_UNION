import { Router } from "express";
import { Actualizarlote, Buscarlote,  Registrarlotes, desactivarlote, eliminarlote, listarlotes } from "../controllers/lotes.controller.js";
import { validarlotes, validarlotesactualizar } from "../../validate/lotes.validacion.js";
import { validarToken } from "../controllers/autenticacion.js";

const rutalote = Router();

rutalote.get("/listarlote",validarToken, listarlotes);
rutalote.post("/Registrarlote",validarToken,validarlotes, Registrarlotes);
rutalote.put("/Actualizarlote/:id_lote",validarToken,validarlotesactualizar, Actualizarlote);
rutalote.get("/Buscarlote/:id_lote",validarToken, Buscarlote);
rutalote.delete("/eliminarlote/:id_lote",validarToken, eliminarlote)
rutalote.put("/desactivarlote/:id_lote",validarToken, desactivarlote);


export default rutalote ;
