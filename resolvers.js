const db = require('./db')

const Query = {
	students: _=> db.students.list()
	, studentById: (root, args, context, info)=>{
		return db.students.get(args.id)
	}
}

const Student={
	college: root=> db.colleges.get(root.collegeId)
}
module.exports = {Query, Student}
