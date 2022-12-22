import * as React  from 'react';

import { AppContext } from '../AppContext';
export function Test(): JSX.Element {


  const [xxx] = React.useContext(AppContext);

console.log(xxx);
  return (
    <div>zzz</div>
  );

}

