import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../common/Button/Button';
import { fetchTables } from '../../redux/tablesRedux';

const Home = () => {
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  if (!tables || tables.length === 0) {
    return <p>Ładowanie stolików...</p>;
  }
  return (
    <>
      <h1> Stoliki</h1>
      {/* <div className='d-flex justify-content-between align-items-center mb-3'>
        <div className='d-flex align-items-center'>
          <h3 className='me-3'>Stolik 1</h3>
          <p className=' mb-1'>status: nazwa statusu</p>
        </div>

        <Button />
      </div> */}
      {tables.map((table) => (
        <div
          key={table.id}
          className='d-flex justify-content-between align-items-center mb-3'
        >
          <div className='d-flex align-items-center'>
            <h3 className='me-3'>Stolik {table.id}</h3>
            <p className=' mb-1'>status: {table.status}</p>
          </div>
          <Button tableId={table.id}> Pokaż więcej </Button>
        </div>
      ))}
    </>
  );
};

export default Home;
