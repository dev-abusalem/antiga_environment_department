import Table from 'react-bootstrap/Table';

function Table3() {
  return (
    <Table striped bordered variant="danger" >
      <thead>
        <tr>
          
          <th className='text-bold'>Scientific name</th>
          <th className='text-bold'>Common name</th>
          
        </tr>
      </thead>
      <tbody>

        <tr>     
          <td className='font-italic'>Capnodium spp</td>
          <td>Sooty mold on citrus</td>
        </tr>


        <tr>     
          <td className='font-italic'>Candidatus Phytoplasma palmae (vector:  Myndus crudus)</td>
          <td>Lethal yellowing of palms</td>
        </tr>


        <tr>     
          <td className='font-italic'>Phytophthora palmivora</td>
          <td>Bud Rot of Palms</td>
        </tr>

        <tr>     
          <td className='font-italic'>Candidatus Liberibacter asiaticus</td>
          <td>Citrus greening of citrus</td>
        </tr>

    
      </tbody>
    </Table>
  );
}

export default Table3;