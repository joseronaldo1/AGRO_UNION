import { Router } from "express";
import { Actualizarlote, Buscarlote, Desactivarlote, Registrarlotes, listarlotes } from "../controllers/lotes.controller.js";
import { validarlotes } from "../../validate/lotes.validacion.js";

const rutalote = Router();

rutalote.get("/listarlote", listarlotes);
rutalote.post("/Registrarlote",validarlotes, Registrarlotes);
rutalote.put("/Actualizarlote",validarlotes, Actualizarlote);
rutalote.get("/Buscarlote", Buscarlote);
rutalote.delete("/desactivarlote", Desactivarlote);


export { rutalote };