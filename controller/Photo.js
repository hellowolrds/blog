let conn = require('./mysql');
let moment = require('moment');

async function getPhotos () {
	var sql = 'select * from photos';
	return new Promise(resolve=> {
		conn.query(sql, (err, result)=> {
			if (err)
				throw err;
			resolve(result);
		});
	});
}

module.exports = {
	getPhotos: getPhotos
}