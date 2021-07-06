/**
 * @author WMXPY
 * @namespace Shell
 * @description Press
 */

export type ShellKeyboardKey = 'escape';

export type ShellWaitForKeyPressOption = {

    readonly cancelKeys: ShellKeyboardKey[];
};

const KeyboardKeyMap: Record<ShellKeyboardKey, number> = {

    escape: 27,
};

export const shellGetCharCodeByKeyboardKey = (key: ShellKeyboardKey): number => {

    if (KeyboardKeyMap[key]) {
        return KeyboardKeyMap[key];
    }

    return NaN;
};

export const shellWaitForKeyPress = (option: ShellWaitForKeyPressOption): Promise<boolean> => {

    const cancelKeys: number[] = option.cancelKeys.map((each: ShellKeyboardKey) => shellGetCharCodeByKeyboardKey(each));

    process.stdin.setRawMode(true);

    return new Promise<boolean>((resolve: (result: boolean) => void) => {

        process.stdin.on('data', (buffer: Buffer) => {

            const charCode: number = buffer.toString().charCodeAt(0);
            process.stdin.setRawMode(false);

            if (cancelKeys.includes(charCode)) {
                resolve(false);
                return;
            }

            resolve(true);
        });
    });
};
