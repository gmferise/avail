import React from 'react';
import Navigation from '../comps/Navigation';

const BaseView = ({ children }) => {
  return (<>
    <Navigation />
    <main>{children}</main>
  </>);
};

export default BaseView;