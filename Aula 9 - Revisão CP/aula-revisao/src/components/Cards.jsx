export default function Cards({name, description, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{id}</p>
    </div>
  );
}