import React, { useState } from 'react';
import Scroll from './mims-scroll';
import SearchList from './mims-searchlist';

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(true);
  const filteredMeds = details.filter(
    med => {
      return (
        med
        .ill
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        med
        .gen
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        med
        .brd
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        med
        .dos
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(true);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredMeds={filteredMeds} />
	  		</Scroll>
	  	);
	  }
    return null;
  }

  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Search for your med</h2>
			</div>
			<div className="pa2">
				<input
					className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
					type = "search"
					placeholder = "Search People"
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  );
}

export default Search;
