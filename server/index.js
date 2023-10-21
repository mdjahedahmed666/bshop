const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors(
  {
    origin: ["https://bshopfronnt.vercel.app"],
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials:true
  }
));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0jahed.ldqz6dp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productCollection = client.db("productDB").collection("products");
    const userCollection = client.db("productDB").collection("users");
    const cartCollection = client.db("productDB").collection("cart");

    app.get("/products/:brandName", async (req, res) => {
      const brandName = req.params.brandName;
      const cursor = productCollection.find({ brandName: brandName });
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/myCart", async (req, res) => {
      const cursor = cartCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });


    app.post("/products", async (req,res) =>{
        const newProduct = req.body;
        const result = await productCollection.insertOne(newProduct);
        res.send(result);
    })
    app.post("/addToCart", async (req,res) =>{
        const newCart = req.body;
        const result = await cartCollection.insertOne(newCart);
        res.send(result);
    })
    app.post("/users", async (req,res) =>{
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        res.send(result);
    })


    app.put("/product/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const options = {upsert: true}
      const updatedProduct = req.body;
      const product = {
        $set:
        {
          name: updatedProduct.name,
         brandName: updatedProduct.brandName,
         type: updatedProduct.brandType,
         price: updatedProduct.price,   
         photo: updatedProduct.photo,
         rating: updatedProduct.rating
        }
        
      }
      const result = await productCollection.updateOne(query,product,options);
      res.send(result);
    });

    app.delete("/addToCart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Brand shop server is running");
})

app.listen(port, () => {
    console.log(`Brand shop is listening on port :${port}`);
});
