require('dotenv').config();

const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Simple CRUD Server is running");
});

app.listen(port, () => {
  console.log(`Simple CRUD server running on port ${port}`);
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const database = client.db('usersdb');
    const usersColection = database.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersColection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersColection.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersColection.insertOne(newUser);
      res.send(result);
    });

    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const user = req.body;

      const updatedDoc = {
        $set: {
          name: user.name,
          email: user.email
        }
      };

      const result = await usersColection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersColection.deleteOne(query);
      res.send(result);
    });
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);
