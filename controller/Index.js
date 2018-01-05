let conn = require('./mysql');
let moment = require('moment');
let Articles = {
	getData (callback) {
		get().then(data=>{
			callback(data);
		});
	}
};


// 读取数据
function getData (table) {
	return new Promise(resolve=>{
		var sql = "select * from " + table + " limit 4";
		if ( table == 'last' )
			sql = "select * from article order by article_id desc limit 4";
		conn.query(sql, (err, result)=>{
			if ( err )
				throw err;
			resolve(result);
		})
	})
}
async function get () {
	var article = await getData('article');
	var photo = await getData('photos');
	var last = await getData('last');

	return {
		article: article,
		photo: photo,
		last: last,
		moment: moment
	}
}

module.exports = Articles;