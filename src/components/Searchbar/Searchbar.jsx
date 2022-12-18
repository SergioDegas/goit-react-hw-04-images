import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, SearchBtn } from './Searchbar.styled';
import toast from 'react-hot-toast';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeInput = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('write something');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    e.target.reset();
  };

  return (
    <header>
      <Form onSubmit={handleSubmit}>
        <Input
          name="searchQuery"
          value={searchQuery}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchBtn type="submit">
          <span>Search</span>
        </SearchBtn>
      </Form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
