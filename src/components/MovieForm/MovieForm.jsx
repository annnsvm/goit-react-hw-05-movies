import { Form, Input, Button } from './MovieForm.styled'; //styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const MovieForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Enter movie name');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Please, enter movie name" />
      <Button type="submit">Search</Button>
      <ToastContainer />
    </Form>
  );
};

MovieForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default MovieForm;
