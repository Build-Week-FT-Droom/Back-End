const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findJobs,
    findJobsById,
    findJobsByUser,
    updateJobs,
    insert,
    destroy
}

function findById(id) {
    return db('jobs')
        .where({ id })
        .first();
}

function findJobs() {
    return db('jobs')
}

function findJobsById(id) {
    return db('jobs as j')
        .where( {'j.id': id} )
}

function findJobsByUser(id) {
    return db('jobs as j')
        .where('j.user_id', id) // fix this
}

function insert() {
    return db('jobs')
        .where('id', id)
        .insert();
}

function destroy(id) {
    return db('jobs')
        .where('id', id)
        .del();
}