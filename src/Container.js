import React from 'react';

const Container = props => (
  <div style={{ margin: '0 auto', maxWidth: props.w }}>{props.children}</div>
);

export default Container;
