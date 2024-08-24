import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMatricula() {
  const [id, setId] = useState('');
  const [aluno, setAluno] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { carro, marca, preco };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Carro atualizado com sucesso!');
        navigate("/matriculas");
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
        onChange={(e) => setAluno(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Marca"
        value={marca}
        onChange={(e) => setTurma(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setCurso(e.target.value)}
        required
      />
      <button type="submit">Atualizar Carro</button>
    </form>
    </div>
  );
}
