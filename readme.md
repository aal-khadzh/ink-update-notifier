# ink-update-notifier

## Install

```
$ npm install ink-update-notifier
```

## Usage

```jsx
import React from 'react';
import {render} from 'ink';
import UpdateNotifier from 'ink-update-notifier';

const packageJSON = require('./package.json');

render(<UpdateNotifier pkg={packageJSON} />);
```

## Props

### type

Type: `object`
