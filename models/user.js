const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db
      .collection('users')
      .insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({_id: new ObjectId(userId)}); //if u use findone u dont have to use next() as it would return the first element 
  }                                           //we do not have to write next() to fetch first element

}

module.exports = User;
