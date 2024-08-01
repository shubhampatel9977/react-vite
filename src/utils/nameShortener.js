export function nameShortener(string, length = 10) {
    try {

        if (typeof string !== 'string' || string == null) {
            console.error('Invalid input: Input should be a non-null string');
            return null;
        }

        if (typeof length !== 'number' || length < 0) {
            console.error('Invalid length: Length should be a non-negative number');
            return null;
        }

        if (string.length <= length) {
            return string; // No need to shorten if the string is already short enough
        }

        return string.substring(0, length) + '...';
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}