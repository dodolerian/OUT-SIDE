import { login } from "../../../database/call.js";
import joi from 'joi';

const valideReq = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
})


export async function loginhandler(req, res) {
  const isValide = valideReq.validate(req.body);
  if (isValide.error) {
      return res.status(400).json({ "message": "erreur d'insertion" });
  }
  
  try {
      const passwordid = await login([req.body["email"]]); //résolution de la promesse
      const passwordiobj = passwordid[0];

      if (req.body["password"] === passwordiobj.password) {
          return res.status(200).json({ "message": "mpd valide go to /home"});
      } else {
          return res.status(400).json({ "message": "mdp ou mail incorrect" });
      }
  } catch (error) {
      console.error(error);
      return res.status(500).json({ "message": "Erreur interne du serveur" });
  }
}