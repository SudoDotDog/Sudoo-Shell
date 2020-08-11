/**
 * @author WMXPY
 * @namespace Shell
 * @description Press
 */

export type KeyboardKey = 'escape';

export type WaitForKeyPressOption = {

    readonly cancelKeys: KeyboardKey[];
};

const KeyboardKeyMap: Record<KeyboardKey, number> = {

    escape: 27,
};

export const getCharCodeByKeyboardKey = (key: KeyboardKey): number => {

    if (KeyboardKeyMap[key]) {
        return KeyboardKeyMap[key];
    }

    return NaN;
};

export const waitForKeyPress = (): Promise<boolean> => {

    process.stdin.setRawMode(true);

    return new Promise<boolean>((resolve: (result: boolean) => void) => {

        process.stdin.on('data', (buffer: Buffer) => {

            const charCode: number = buffer.toString().charCodeAt(0);
            process.stdin.setRawMode(false);

            if (charCode === escCharCode) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
