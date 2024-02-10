import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Error! Failed to fetch!!');
            }
            return res.json();
        })
        .then((data) => {
            if (data.results) {
                setData(data.results);
            } else {
                setData(data);
            }
            setLoader(false);
        })
        .catch((err) => {
            console.log(err.message);
            setLoader(false);
        })
    }, [url]);

    return [data, loader];
}

export default useFetch;