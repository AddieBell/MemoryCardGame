function Card({item, handleClick}) {
    return (
        <div className="card" onClick={handleClick}>
            {item}
        </div>
    )
}

export default Card;