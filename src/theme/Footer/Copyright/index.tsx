import React from 'react';
import type {Props} from '@theme/Footer/Copyright';

export default function FooterCopyright({copyright}: Props): JSX.Element {
  // Replace {year} with the actual current year
  const year = String(new Date().getFullYear());
  const processedCopyright = copyright.replace(/\{year\}/g, year);

  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: processedCopyright}}
    />
  );
}
