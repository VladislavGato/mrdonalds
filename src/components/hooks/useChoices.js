import { useState } from 'react';

export function useChoices(openItem) {
	const readyChoise = openItem.choice ? openItem.choice : null;
	const [choice, setChoice] = useState(readyChoise);

	const changeChoices = (e) => {
		setChoice(e.target.value);
	};

	return {choice, changeChoices};
}