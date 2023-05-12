import axios from "axios"
import { useEffect, useState } from "react"

const useUrl = (url) => {

    const [state, setState] = useState();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const [resLength, setResLength] = useState(0)


    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setState(res.data)
                setResLength(res.data.residents.length)
                setError(false)
            })
            .catch(() => setError(true))
            .finally(() => setIsLoading(false))
    }, [url])


    return [ state, error, isLoading, resLength ]

}

export default useUrl;