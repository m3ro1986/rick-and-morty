import '../styles/residentCard.css';
import useUrl from '../hooks/useUrl';

const ResidentCard = ({ url }) => {

    const [resident] = useUrl(url)

    return (
        <div className='resident-container'>
            <figure className='img-container'>
                <img src={resident?.image} alt="" />
            </figure>

            <article>
                <div className='title-name'>
                    <h3>{resident?.name}</h3>
                    <div className='status-container'>
                        <span className={resident?.status}></span>
                        <span>{resident?.status} - {resident?.species}</span>
                    </div>
                </div>

                <ul className='resident-detail'>
                    <li> <span>Last know location:</span> <span>{resident?.location.name}</span></li>
                    <li> <span>Episodes:</span> <span>{resident?.episode.length}</span></li>
                </ul>
            </article>
        </div>
    )
}

export default ResidentCard