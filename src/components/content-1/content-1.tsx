import { localization } from '../../translations/translations.js';
import './content-1.css';
import profilePhoto from '../../images/profile-photo.jpg';

interface Content1Props {
  localization: localization;
}

export default function Content1({
  localization: { license, handler_name, dog_name, expiration, certified },
}: Content1Props) {
  const expirationYear = new Date().getFullYear() + 1;

  return (
    <div id="content-1" className="slider-content">
      <div id="right-bar">
        <img id="photo" src={profilePhoto} width="195" alt="" />
        <div id="certified">{certified.toUpperCase()}</div>
        <div id="expiration-box">
          <h2>{expiration}</h2>
          <h3>Dec 10, {expirationYear}</h3>
        </div>
      </div>
      <h1>Little Angels Service Dogs</h1>
      <h3>{license}</h3>
      <h2>{handler_name}</h2>
      <h3>Mark Kahn</h3>
      <h2>{dog_name}</h2>
      <h3>Kitsune</h3>
    </div>
  );
}
