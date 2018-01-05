let conn = require('./mysql');
let moment = require('moment');
async function getDetail (id) {
	var sql = "select * from article where article_id="+id;
	return new Promise(resolve=>{
		conn.query(sql, (err, result)=>{
			if ( err )
				throw err;
			resolve(result);
		});
	});
}

async function getAll () {
	var promise = new Promise(resolve=>{
		conn.query('select * from article_sort', (err, result)=>{
			if (err)
				throw err;
			resolve(result)
		})
	});
	return promise.then((data)=>{
		return new Promise(resolve=> {
			conn.query('select * from article', (err, result)=> {
				if (err)
					throw err;
				var obj = {
					tab: data,
					article: result,
					moment: moment
				}
				resolve(obj);
			})
		});
	})
}


module.exports = {
	getDetail: getDetail,
	getAll: getAll
}