import "./card.style.css";

const Card = ({monsters}) =>  {
    const { name, id, email } =monsters;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}.png?set=set2&size=180x180`}
          title={name}
          alt={email}
        />
        <h2 className="card-name">{name}</h2>
        <p className="card-email">{email}</p>
      </div>
    );
}
export default Card;
