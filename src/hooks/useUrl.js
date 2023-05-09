import axios from "axios"
import { useEffect, useState } from "react"

const useUrl = (url) => {

    const [state, setState] = useState();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setState(res.data)
                setError(false)
            })
            .catch(() => setError(true))
            .finally(() => setIsLoading(false))
    }, [url])

    return [state, error, isLoading]

}

export default useUrl;