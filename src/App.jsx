import { useState } from 'react'
import './App.css'
import useUrl from './hooks/useUrl'
import getRandomLocation from './utils/getRandomLocation'
import ResidentCard from './components/ResidentCard'
import Loader from './components/Loader'

function App() {

    const [idLocation, setIdLocation] = useState(getRandomLocation())
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    const [location, error, isLoading] = useUrl(url)

    const handleSubmit = e => {
        e.preventDefault()
        setIdLocation(e.target.firstChild.value)
        e.target.firstChild.value = "";
    }

    console.log(idLocation)

    return (
        <>
            {isLoading && <Loader />}
            <div className='app'>
                <header className='app__header'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='type a id location'
                            />
                        </form>
                    </div>
                </header>
                <article className='location-data'>
                    <h1>{location?.name}</h1>
                    <ul>
                        <li><span>Type</span><span>{location?.type}</span></li>
                        <li><span>Dimension n°{idLocation}</span><span>{location?.dimension}</span></li>
                        <li><span>Residents</span><span>{location?.residents.length}</span></li>
                    </ul>
                </article>
                <main className='cards-container'>
                    {
                        location?.residents.map(url => (
                            <ResidentCard key={url} url={url} />
                        ))
                    }

                </main>
            </div>

            <footer>
                <p>Made with ❤️ by mero</p>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/luis-garcia-785851251/" target='_blank'> <i className='bx bxl-linkedin-square' ></i> </a> </li>
                    <li> <a href="https://github.com/m3ro1986" target='_blank'><i className='bx bxl-github'></i></a> </li>
                </ul>
            </footer>
        </>
    )
}

export default App
