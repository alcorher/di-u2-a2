import { getImageUrl } from './utils2.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size >= 90 ? 'b' : 's')}
      alt={person.name}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={90}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
