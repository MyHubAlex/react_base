import React, { PropTypes } from 'react';

import { Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
    React.createElement(Container, {}, React.createElement(Logo),
                                      children,
                                      React.createElement(Footer))
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  React.createElement(Segment, {} ,
    React.createElement(Header,{},
      React.createElement(Link,{to: '/'},'My Blog')))
);

const Footer = () =>(
  React.createElement(Segment, {} , 'Powered by React Course')
);
