/**
 * @author WMXPY
 * @namespace Shell
 * @description Execution
 */

import { exec } from "child_process";

export const shellExecuteCommand = (command: string): Promise<string> => {

    return new Promise<string>((resolve: (out: string) => void, reject: (reason: any) => void) => {

        exec(command, (error: any, stdout: string, stderr: string) => {

            if (!error) {
                resolve(stdout);
                return;
            }

            reject(stderr);
        });
    });
};
