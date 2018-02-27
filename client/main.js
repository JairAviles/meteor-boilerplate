import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { AppRouter, onAuthChanges } from '../imports/routes/AppRouter';
import './../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    ReactDOM.render(<AppRouter />, document.getElementById('app'));
});