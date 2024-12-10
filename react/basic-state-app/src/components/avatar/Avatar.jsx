

export default function Avatar({img, name, isNew}) {
    return(
        <div className="container">
            <img src={img} alt="" />
            <p>{name}</p>
            {isNew && <span className="new">new</span>}
        </div>
    );
}
