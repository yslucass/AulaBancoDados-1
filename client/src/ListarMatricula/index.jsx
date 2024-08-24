import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMatriculas() {
  const [matriculas, setMatriculas] = useState([]);


  useEffect(() => {
    const fetchMatriculas = async () => {
      try {
        const response = await fetch('http://localhost:5000/matriculas');
        const data = await response.json();
        setMatriculas(data);
      } catch (error) {
        console.error('Erro ao buscar os carros:', error);
      }
    };

    fetchMatriculas();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMatriculas(matriculas.filter((matricula) => matricula._id !== id));
        alert('Carro excluída com sucesso!');
      } else {
        alert('Erro ao excluir o carro.');
      }
    } catch (error) {
      console.error('Erro ao excluir o carro:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Carros</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código do Carro</th>
            <th>Nome do Carro</th>
            <th>Marca</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {matriculas.map((carros) => (
            <tr key={carros._id}>
              <td>{carros._id}</td>
              <td>{carros.aluno}</td>
              <td>{carros.turma}</td>
              <td>{carros.curso}</td>
              <td>
                <button onClick={() => handleDelete(carros._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


db.carros.insertOne({
  carro: "Camaro",
  marca: "Chevrolet",
  preco: "R$560.000"
})