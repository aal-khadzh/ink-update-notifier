# ink-update_notifier

## Install

```
$ npm install ink-update_notifier
```

## Usage

```jsx
import React from 'react';
import {render} from 'ink';
import UpdateNotifier from 'ink-update_notifier';

const packageJSON = './package.json';

render(<UpdateNotifier pkg={packageJSON} />);
```
