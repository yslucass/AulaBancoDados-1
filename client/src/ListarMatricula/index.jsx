import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadCarros() {
  const [carros, setCarros] = useState([]);


  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await fetch('http://localhost:5000/carros');
        const data = await response.json();
        setCarros(data);
      } catch (error) {
        console.error('Erro ao buscar os carros:', error);
      }
    };

    fetchCarros();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/carros/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setCarros(carros.filter((carros) => carros._id !== id));
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
          {carros.map((carros) => (
            <tr key={carros._id}>
              <td>{carros._id}</td>
              <td>{carros.carro}</td>
              <td>{carros.marca}</td>
              <td>{carros.preco}</td>
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
