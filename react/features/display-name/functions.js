/**
 * Formats the display name.
 *
 * @param {string} displayName - The display name to be formatted.
 * @param {string} suffix - Suffix that will be used for the formatting.
 * @returns {string} The formatted display name.
 */
export function formatDisplayName(displayName, suffix) {
    return `${displayName || suffix || ''}${
        displayName && suffix ? ` (${suffix})` : ''}`;
}
