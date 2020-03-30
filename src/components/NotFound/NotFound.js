import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFound = (props) => (
  <h1>Error 404: {props.match.params.url} Not Found</h1>
);

export default withRouter(NotFound);
