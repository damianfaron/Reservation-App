import { Button as BootstrapButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Button = ({ tableId, children }) => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/table/${tableId}`);
  };

  return (
    <BootstrapButton variant='primary' onClick={handelClick}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
