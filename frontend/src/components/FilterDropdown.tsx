import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { filterOptionType } from '../constants';
import './components.css'


type FilterDropdownProps = {
	options: filterOptionType[],
	handler: (event: React.MouseEvent<Element, MouseEvent>, value: string) => void,
	label: string
}


export function FilterDropdown({options, handler, label}: FilterDropdownProps) {
	return (
	    <Dropdown style={{marginLeft: "10px"}}>
	      <Dropdown.Toggle variant="danger" id="dropdown-basic" className="filter-select">
	        {label}
	      </Dropdown.Toggle>

	      <Dropdown.Menu>
			{options.map(option => 
				<Dropdown.Item 
					key={option.uniqueId} 
					onClick={(e) => handler(e, option.value)}
					>
					{option.label}
				</Dropdown.Item>
			)}
	      </Dropdown.Menu>
	    </Dropdown>
  	)
}