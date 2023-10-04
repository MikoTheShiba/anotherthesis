import React, { useState } from 'react';
import Scroll from './pats-scroll';
import SearchList from './pats-searchlist';

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(true);
  const filteredPats = details.filter(
    pat => {
      return (
        pat
        .nam
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        pat
        .age
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        pat
        .dat
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        pat
        .doc
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredPats={filteredPats} />
	  		</Scroll>
	  	);
	  }
    return null;
  }

  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Patient History</h2>
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
