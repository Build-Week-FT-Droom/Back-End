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

// function updateJobs(update, id) {
//     return db('jobs')
//         .where({ id })
//         .update(update)
//         .then((ids) => ids);
// }

function updateJobs(id, changes) {
    return db('jobs')
      .where({ id })
      .update(changes);
  }

function insert(job) {
    return db('jobs')
        // .where('id', id)
        // .insert();
        .insert(job, 'id')
        .then(id => {
            return findJobsById(id[0])
        })
}

function destroy(id) {
    return db('jobs')
        .where('id', id)
        .del();
}