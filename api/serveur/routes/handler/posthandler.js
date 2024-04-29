import { post } from "../../../database/call.js";
import joi from 'joi';

const valideReq = joi.object({
  time: joi.date().timestamp().required(),
  title: joi.string().required(),
  location: joi.string().required(),
  participant: joi.string().required(),
  content: joi.string().required(),
  timetable: joi.date().timestamp().required()
})
export async function posthandler(req, res){
  const isValide = valideReq.validate(req.body);
  res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  res.header("Access-Control-Allow-Headers","*");
  if(isValide.error){
    return res.status(400).json({"message":"erreur d'insertion"});
  }
  const checkerror=post([req.body["time"],req.body["title"],req.body["location"],req.body["participant"], req.body["content"],req.body["timetable"]]);
  return res.status(200).json({"message":"valider"});
  

}
