import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Hightlight({ filter, string, strLength }) {
  const croppedString = string.length < strLength ? string : `${string.slice(0, strLength)}...`;

  if (!filter) return croppedString;
  const regexp = new RegExp(filter, 'ig');
  const matchValue = croppedString.match(regexp);

  if (matchValue) {
    return croppedString.split(regexp).map((str, i, arr) => {
      if (i < arr.length - 1) {
        const matchStr = matchValue.shift();

        return (
          <Fragment key={uuidv4()}>
            {str}
            <span data-test-id='highlight-matches' style={{ color: '#FF5253' }}>
              {matchStr}
            </span>
          </Fragment>
        );
      }

      return str;
    });
  }

  return croppedString;
}
