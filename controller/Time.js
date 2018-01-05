let conn = require('./mysql');
let moment = require('moment');

async function getTimes () {
	var sql = 'select * from time order by time_time desc';
	return new Promise(resolve=> {
		conn.query(sql, (err, result)=> {
			if (err)
				throw err;
			resolve(result);
		});
	});
}



module.exports = {
	getTimes: getTimes
}