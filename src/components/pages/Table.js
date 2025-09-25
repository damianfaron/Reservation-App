import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTables } from '../../redux/tablesRedux';
import { Button, Form } from 'react-bootstrap';

const Table = () => {
  const { id } = useParams();
  const tables = useSelector((state) => state.tables);
  const table = tables.find((table) => table.id === id);
  const dispatch = useDispatch();

  const [status, setStatus] = useState(table?.status || '');
  const [peopleAmount, setPeopleAmount] = useState(table?.peopleAmount || 0);
  const [bill, setBill] = useState(table?.bill || 0);

  if (!table) return <p>Stolik nie istnieje</p>;

  const handleUpdate = () => {
    const updatedTables = tables.map((tableStatus) =>
      tableStatus.id === table.id
        ? { ...tableStatus, status, peopleAmount, bill }
        : tableStatus
    );
    dispatch(updateTables(updatedTables));
    alert('Zaktualizowano');
  };

  return (
    <div className='mt-3'>
      <h2>Table {table.id}</h2>
      <Form>
        <Form.Group className='d-flex align-items-center mb-3 '>
          <Form.Label>Status:</Form.Label>
          <Form.Select
            className='w-auto ms-2'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Free</option>
            <option>Busy</option>
            <option>Reserved</option>
            <option>Cleaning</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3 d-flex align-items-center'>
          <Form.Label className='me-2'>People:</Form.Label>
          <Form.Control
            type='number'
            value={peopleAmount}
            onChange={(e) => setPeopleAmount(Number(e.target.value))}
            style={{ width: '60px', marginRight: '5px' }}
            min={0}
            max={table.maxPeopleAmount}
          />
          / {table.maxPeopleAmount}
        </Form.Group>
        <Form.Group className='mb-3 d-flex align-items-center'>
          <Form.Label className='me-2'>Bill:</Form.Label>
          <Form.Control
            type='number'
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            style={{ width: '100px' }}
            min={0}
          />
          <span className='ms-2'>PLN</span>
        </Form.Group>
        <Button variant='primary' onClick={handleUpdate}>
          Update
        </Button>
        <Button as={NavLink} to='/' variant='secondary' className='ms-2'>
          Back
        </Button>
      </Form>
    </div>
  );
};

export default Table;
