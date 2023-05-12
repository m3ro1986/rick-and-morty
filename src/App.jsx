import { useState } from 'react'
import './App.css'
import useUrl from './hooks/useUrl'
import getRandomLocation from './utils/getRandomLocation'
import ResidentCard from './components/ResidentCard'
import Loader from './components/Loader'

function App() {
    const [witdh, setWitdh] = useState(0)
    const [idLocation, setIdLocation] = useState(getRandomLocation())
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    const [location, error, isLoading] = useUrl(url)

    const handleSubmit = e => {
        e.preventDefault()

        if (e.target.firstChild.value === '') {
            setIdLocation(0)
        } else {
            setIdLocation(e.target.firstChild.value)
        }

        e.target.firstChild.value = "";
    }

    const changeWidth = () => {
        if ( witdh === 0) {
            setWitdh("100%")
        } else {
            setWitdh(0)
        }
    }

    console.log(witdh)
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
                    <h1>{error ? <p>❌ location {idLocation} does not exist¡¡¡</p> : location?.name}</h1>
                    <ul>
                        <li><span>Type</span><span>{location?.type}</span></li>
                        <li><span>Dimension n°{idLocation}</span><span>{location?.dimension}</span></li>
                        <li><span>Residents</span><span>{location?.residents.length}</span></li>
                        <div className='pagination' style={{width:`${witdh}`}}>
                            <h4>Pages</h4>
                        </div>   
                        <i className={ witdh === '100%' ? 'bx bxs-right-arrow' : 'bx bxs-left-arrow' } onClick={changeWidth} ></i>
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
