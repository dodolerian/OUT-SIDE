import { register } from "../../../database/call.js";
import joi from 'joi';

const valideReq = joi.object({
  name: joi.string().required(),
  surname: joi.string().required(),
  pseudo: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
})
export async function registerhandler(req, res){
  const isValide = valideReq.validate(req.body);
  if(isValide.error){
    return res.status(400).json({"message":"erreur d'insertion"});
  }
  const checkerror=register([req.body["name"],req.body["surname"],req.body["pseudo"],req.body["email"], req.body["password"],[false]]);
  return res.status(200).json({"message":"valider"});
  

}
