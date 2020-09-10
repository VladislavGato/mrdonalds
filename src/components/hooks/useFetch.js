import { useEffect, useState } from 'react';

export const useFetch = () => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async() => {
			try {
				const json = await fetch('DB.json');
				const res = await json.json();
				setResponse(res);
			} catch (err) {
				setError(err)
			}
		};

		fetchData();

		// или вот так, но это называют собачьими яйцами
		// (async () => {
		// 	try {
		// 		const json = await fetch('DB.json');
		// 		const res = await json.json();
		// 		setResponse(res);
		// 	} catch (err) {
		// 		setError(err)
		// 	}
		// })();
	}, []);

	return { response, error };
}  