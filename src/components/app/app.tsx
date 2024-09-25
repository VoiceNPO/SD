import { useState } from 'react';
import './app.css';
import Background from '../background/background';
import Header from '../header/header';
import Footer from '../footer/footer';
import Body from '../body/body';
import translations, {
  countries,
  localization,
} from '../../translations/translations';
import settings from '../../utils/settings';

export default function App() {
  const [localization, setLocalization] = useState<localization>(
    translations[settings.country]
  );

  function changeCountry(country: countries) {
    settings.country = country;
    setLocalization(translations[settings.country]);
  }

  return (
    <div className="App">
      <Background />
      <Header localization={localization} />
      <Body localization={localization} />
      <Footer localization={localization} changeCountry={changeCountry} />
    </div>
  );
}
