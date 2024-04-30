import sqlite3 from 'sqlite3';

function open(name){
  return new sqlite3.Database(name, (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données:', err.message);
    }
  });
}
export async function Select(query, params = []){
    let db = open('../database/bdd.db');
    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
          db.close();
          return;
        }
        resolve(rows)
      });
      db.close();
    });
}
export function Exec(query, params){
    let db = open('./bbd.db');
    db.run(query, params,function(err) {
        if (err) {
          return console.error(err.message);
        }
    });
    db.close;
}
function closeDatabase(db) {
  return new Promise((resolve, reject) => {
    db.close((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
