// setup-jest.ts
import 'jest-preset-angular/setup-jest';



if (!globalThis.crypto) {
    (globalThis as any).crypto = {};
}

if (!globalThis.crypto.randomUUID) {
    globalThis.crypto.randomUUID = () => {
        // Simple fake UUID (for testing only)
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }) as `${string}-${string}-${string}-${string}-${string}`;
    };
}