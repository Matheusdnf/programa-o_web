export default function Table() {
  return (
    <div>
      <h1>Receitas em React</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ingrediente</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bolo de Chocolate</td>
            <td>Chocolate</td>
            <td>200g</td>
          </tr>
          <tr>
            <td>Pão de Queijo</td>
            <td>Queijo</td>
            <td>150g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
