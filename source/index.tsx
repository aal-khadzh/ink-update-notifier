import * as React from 'react';
import {FC} from 'react';
import {Box, Text} from 'ink';
const updateNotifier = require('update-notifier');

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
	return (
		<Box flexDirection="column" borderStyle="round" borderColor="green">
			{update && (
				<Text>{`Update available: ${update.current} => ${update.latest}`}</Text>
			)}
		</Box>
	);
};

export default UpdateNotifier;
