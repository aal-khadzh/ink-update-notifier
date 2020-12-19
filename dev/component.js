const React = require('react');
const packageJSON = require('../package.json');
const {render} = require('ink');
const UpdateNotifier = require('..').default;
render(<UpdateNotifier pkg={packageJSON} />);
