import { localization } from '../../translations/translations.js';

interface Content4Props {
  localization: localization;
}

export default function Content4(_: Content4Props) {
  return (
    <div id="content-4" className="slider-content">
      <img id="org-logo" src="images/org-logo.png" alt="" />
    </div>
  );
}
