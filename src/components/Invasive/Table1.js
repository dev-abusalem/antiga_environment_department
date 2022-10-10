import Table from 'react-bootstrap/Table';

function Table1() {
  return (
    <Table striped bordered variant="dark" >
      <thead>
        <tr>
          
          <th className='text-bold'>Scientific name</th>
          <th className='text-bold'>Common name</th>
          
        </tr>
      </thead>
      <tbody>

        <tr>     
          <td>Cymbopogon spp</td>
          <td>Lemon grass</td>
        </tr>


        <tr>     
          <td>(typha domingensis</td>
          <td>Southern cattail</td>
        </tr>


        <tr>     
          <td className='font-italic'>Antigonon leptopus*</td>
          <td>Coral vine, Coralita</td>
        </tr>

        <tr>     
          <td className='font-italic'>Acacia tortuosa*</td>
          <td>Cassie</td>
        </tr>

        <tr>     
          <td className='font-italic'>Acacia macracantha*</td>
          <td>Cassie</td>
        </tr>

        <tr>     
          <td className='font-italic'>Haematoxylon campechianum*</td>
          <td>Blackwood tree, Bloodwood tree</td>
        </tr>


        <tr>     
          <td className='font-italic'>Azadirachta indica*</td>
          <td>Neem</td>
        </tr>

        <tr>     
          <td className='font-italic'>Prosopis juliflora*</td>
          <td>Mesquite</td>
        </tr>


        <tr>     
          <td className='font-italic'>Leucaena leucocephala*</td>
          <td>White lead tree, River tamarind,</td>
        </tr>

        <tr>     
          <td className='font-italic'>Eichhornia crassipes*</td>
          <td>Common water hyacinth,</td>
        </tr>


      </tbody>
    </Table>
  );
}

export default Table1;