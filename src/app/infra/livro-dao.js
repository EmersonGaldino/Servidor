class livroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject)=>{
            this._db.all('select * from livros',
            (error,result) =>{
            if (error) return reject('Não foi possvel listar os livros');
            
            return resolve(result);
            })
        });    
    }
}
module.exports = livroDao