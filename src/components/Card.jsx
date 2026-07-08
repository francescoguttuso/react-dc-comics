export const Card = ((props) => {
    return (
        <div className="card-item">
            <img src={props.thumb} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    );
});