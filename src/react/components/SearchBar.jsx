import { useCallback, useRef, useState } from 'react';
import { AsyncTypeahead, ClearButton, Highlighter } from 'react-bootstrap-typeahead';
import { useNavigate } from 'react-router';

import { MODEL_TO_DISPLAY_NAME_MAP, MODEL_TO_ROUTE_MAP } from '../../utils/constants.js';

const URL_BASE = 'http://localhost:3002';

async function performFetch (url) {

	const response = await fetch(url, { mode: 'same-origin' });

	if (response.status !== 200) throw new Error(response.statusText);

	const searchResults = await response.json();

	return searchResults;

}

const SearchBar = () => {

	const typeaheadRef = useRef(null);

	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState([]);

	const navigate = useNavigate();

	const handleSearch = useCallback(async searchTerm => {

		setIsLoading(true);

		const url = `${URL_BASE}/api/search?searchTerm=${encodeURIComponent(searchTerm)}`;

		const searchResults = await performFetch(url);

		setOptions(searchResults);

		setIsLoading(false);

	}, []);

	const handleChange = useCallback(([selectedOption]) => {

		if (selectedOption) {

			const { model, uuid } = selectedOption;

			const instancePath = `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

			if (typeaheadRef.current) {

				setQuery('');

				typeaheadRef.current.blur();
				typeaheadRef.current.clear();

			}

			navigate(instancePath);

		}

	}, [navigate]);

	const clearInput = useCallback(() => {

		setQuery('');

		typeaheadRef.current?.clear();

	}, []);

	return (
		<AsyncTypeahead
			ref={typeaheadRef}
			id='search-result-options'
			filterBy={() => true}
			delay={1000}
			isLoading={isLoading}
			labelKey='name'
			minLength={3}
			maxHeight={'200px'}
			onInputChange={text => setQuery(text)}
			onSearch={handleSearch}
			onChange={handleChange}
			options={options}
			placeholder='Search Dramatis…'
			emptyLabel='No results found'
			renderMenuItemChildren={(option, { text }) => (
				<>
					<Highlighter search={text}>
						{option.name}
					</Highlighter>
					{' '}
					<span className="dropdown-item-suffix">
						({MODEL_TO_DISPLAY_NAME_MAP[option.model]})
					</span>
				</>
			)}
		>
			{
				query.length > 0 && !isLoading && (
					<div className="rbt-aux">
						<ClearButton
							onClick={clearInput}
							onMouseDown={event => event.preventDefault()}
							label="Clear input"
						/>
					</div>
				)
			}
		</AsyncTypeahead>
	);
};

export default SearchBar;
