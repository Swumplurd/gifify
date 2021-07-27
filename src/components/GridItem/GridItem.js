export const GridItem = ({title, url, date}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={url} className="card-img-top" alt={url}/>
                <div className="card-body">
                    <h5 className="card-title">{title || 'Sin titulo'}</h5>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Ver imagen</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Fecha y hora de subida: {date}</small>
                </div>
            </div>
        </div>
    )
}