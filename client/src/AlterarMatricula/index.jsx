import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateCarros() {
  const [id, setId] = useState('');
  const [carro, setCarro] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { carro, marca, preco };

    try {
      const response = await fetch(`http://localhost:5000/carros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Carro atualizado com sucesso!');
        navigate("/carros");
      } else {
        alert('Erro ao atualizar carros.');
      }
    } catch (error) {
      console.error('Erro ao atualizar carros:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Carros</h2>
      <input
        type="text"
        placeholder="ID do carro"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
      <button type="submit">Atualizar Carro</button>
    </form>
    </div>
  );
}
