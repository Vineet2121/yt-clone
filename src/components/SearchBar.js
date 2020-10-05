import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    //TO DO: make sure we call callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='ui field'>
          <label>Video Search</label>
          <input
            type='text'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
