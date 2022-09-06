import React from 'react';
import Table from 'react-bootstrap/Table';

class Highscore extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>12</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>9</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Highscore;
