const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('carrosdb');
    collection = db.collection('carros');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/carros', async (req, res) => {
  try {
    const novoCarros = req.body;

    const result = await collection.insertOne(novoCarros)
    
    res.status(201).json({ message: 'Carro criada com sucesso', carrosId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar carro', error: err });
  }
});

app.get('/carros', async (req, res) => {
  try {

    const carros = await collection.find().toArray();

    res.status(200).json(carros);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar os carros', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/carros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const matricula = await collection.findOne({ _id: newId });

    if (!carros) {
      res.status(404).json({ message: 'Carro não encontrado' });
    } else {
      res.status(200).json(carros);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar carro', error: err });
  }
});

app.put('/carros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Carro não encontrado' });
    } else {
      res.status(200).json({ message: 'Carro atualizado com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar o carro', error: err });
  }
});

app.delete('/carros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    const result = await collection.deleteOne({ _id: newId });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Carro não encontrado' });
    } else {
      res.status(200).json({ message: 'Carro excluído com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir o carro', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
