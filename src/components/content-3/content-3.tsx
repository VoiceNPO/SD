import { localization } from '../../translations/translations.js';

interface Content3Props {
  localization: localization;
}

export default function Content3({
  localization: { test_date, registration_num, handler_address, handler_phone },
}: Content3Props) {
  const testYear = new Date().getFullYear() - 1;

  return (
    <div id="content-3" className="slider-content">
      <h2>{test_date}</h2>
      <h3>Dec 10, {testYear}</h3>
      <h2>{registration_num}</h2>
      <h3>CR-0421-19</h3>
      <h2>{handler_address}</h2>
      <h3>706 16th ave, San Francisco, CA 94118</h3>
      <h2>{handler_phone}</h2>
      <h3>415-683-0096</h3>
    </div>
  );
}
