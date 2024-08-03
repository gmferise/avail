import React from 'react';
import Navigation from '../comp/Navigation';

const BaseView = ({ children }) => {
  return (<>
    <Navigation />
    <main>{children}</main>
  </>);
};

export default BaseView;