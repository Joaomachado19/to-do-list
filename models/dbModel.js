const { MongoClient } = require("mongodb");
let singleton;

async function connect() {
  if (singleton) return singleton;

  const client = new MongoClient(
    process.env.DB_URL
  );
  await client.connect();

  singleton = client.db(process.env.DB_NAME);
  return singleton;
}

async function findAll(collection) {
  const db = await connect();

  return db.collection(collection).find().toArray();
}

async function insertOne(collection, object) {
  const db = await connect();

  return db.collection(collection).insertOne(object);
}
module.exports = { insertOne, findAll };
