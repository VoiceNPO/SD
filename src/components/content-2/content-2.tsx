import { localization } from '../../translations/translations.js';

interface Content2Props {
  localization: localization;
}

export default function Content2({
  localization: { dog_breed, dog_microchip, dog_service },
}: Content2Props) {
  return (
    <div id="content-2" className="slider-content">
      <h2>{dog_breed}</h2>
      <h3>Golden Retriever &mdash; White</h3>
      <h2>{dog_microchip}</h2>
      <h3>900115002021390</h3>
      <h2>{dog_service}</h2>
      <h3>Medical Alert & Response</h3>
    </div>
  );
}
