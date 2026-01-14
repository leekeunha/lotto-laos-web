export function capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function getRandomBytes(length: number): Uint8Array {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
}

export function arrayBufferToHex(buffer: ArrayBuffer): string {
    return Array.prototype.map
        .call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2))
        .join('');
}

export async function encrypt(
    text: string,
    IV_LENGTH: number,
    ENCRYPTION_KEY: string,
): Promise<string> {
    const iv = getRandomBytes(IV_LENGTH);
    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(ENCRYPTION_KEY),
        'AES-CBC',
        false,
        ['encrypt'],
    );
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-CBC', iv: iv },
        key,
        new TextEncoder().encode(text),
    );
    return `${arrayBufferToHex(iv)}:${arrayBufferToHex(encrypted)}`;
}
