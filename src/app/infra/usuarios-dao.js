class usuariosDao{
    constructor(db){
        this._db = db;
    }
    
    listar(){
        return new Promise((resolve,reject)=>{
            this._db.all('select * from usuarios',
            (error,result) =>{
            if (error) return reject('Não foi possvel listar os usuarios');
            
            return resolve(result);
            })
        })
    }
}
module.exports = usuariosDao;