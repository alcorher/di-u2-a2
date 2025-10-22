import { getImageUrl } from './utils.js';

function Profile({ nombre, imageId, profesion, premios, descubrio }) {
  return (
      <section className="profile">
        <h2>{nombre}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={nombre}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {profesion}
          </li>
          <li>
            <b>Premios: {premios.length} </b> 
            {premios.join(", ")}
          </li>
          <li>
            <b>Descubrió: </b>
            {descubrio}
          </li>
        </ul>
      </section>
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile
        nombre="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profesion="física y química"
        premios={["Premio Nobel de Física", "Premio Nobel de Química", "Medalla Davy", "Medalla Matteucci"]}
        descubrio="polonio (elemento químico)"
      />
      <Profile
        nombre="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profesion="geoquímica"
        premios={["Premio Miyake de geoquímica", "Premio Tanaka"]}
        descubrio="un método para medir el dióxido de carbono en el agua de mar"
      />
    </div>
  );
}