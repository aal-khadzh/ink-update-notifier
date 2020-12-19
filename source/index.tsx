import * as React from 'react';
import {FC} from 'react';
import {Box, Text} from 'ink';
import updateNotifier = require('update-notifier');

interface PackageJSON {
	name: string;
	version: string;
}

interface Props {
	/**
	 * package.json
	 */
	pkg: PackageJSON;
}

/**
 * UpdateNotifier
 */
const UpdateNotifier: FC<Props> = ({pkg}) => {
	const update = updateNotifier({pkg, updateCheckInterval: 0}).update;
	if (!update) {
		return null;
	}
	return (
		<Box flexDirection="column" borderStyle="round" borderColor="green">
			<Text>{`Update available: ${update.current} => ${update.latest}`}</Text>
		</Box>
	);
};

export default UpdateNotifier;
