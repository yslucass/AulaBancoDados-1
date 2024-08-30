import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateCarros() {
  const [carro, setCarro] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoCarros = { carro, marca, preco };

    try {
      const response = await fetch('http://localhost:5000/carros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoCarros),
      });
      if (response.ok) {
        alert('Carro criado com sucesso!');
        setCarro('');
        setMarca('');
        setPreco('');
        navigate("/carros");
      } else {
        alert('Erro ao criar carro.');
      }
    } catch (error) {
      console.error('Erro ao criar carro:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Colocar Carro</h2>
      <input
        type="text"
        placeholder="Nome do Carro"
        value={carro}
        onChange={(e) => setCarro(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <button type="submit">Colocar Carro ao banco de dados.</button>
    </form>
    </div>
  );
}
