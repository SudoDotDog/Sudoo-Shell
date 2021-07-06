/**
 * @author WMXPY
 * @namespace Shell
 * @description Open
 */

import { shellExecuteCommand } from "./execution";

const getOpenCommand = (): string => {

    switch (process.platform) {
        case 'win32':
            return 'start';
    }

    return 'open';
};

export const shellOpenFile = async (file: string): Promise<void> => {

    const openCommand: string = getOpenCommand();
    const parsedCommand: string = `${openCommand} ${file}`;
    await shellExecuteCommand(parsedCommand);

    return;
};
