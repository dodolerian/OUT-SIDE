import {Exec} from './controler.js'

export async function register(params){ //params c'est linput du form
  const query=`INSERT INTO user (name,surname,pseudo,email,password,ban)
  VALUES (?,?,?,?,?,?);
  `;
  Exec(query,params);
}

export async function post(params){ //params c'est linput du form
  const query=`INSERT INTO post (id_user,time,title,location,participant,content,timetable)
  VALUES (1,?,?,?,?,?,?);
  `;
  Exec(query,params);
}