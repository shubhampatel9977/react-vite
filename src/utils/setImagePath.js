
const AppBaseUrl = import.meta.env.VITE_BASH_IMAGE_PATH;

export function setImagePath(data) {
    if (data == null || data == undefined || data == '') {
        return null;
    } else {
        const extUrl = extractImagePath(data)
        return `${AppBaseUrl}/${extUrl}`
    }
};

function extractImagePath(url) {
    const parts = url.split('/');
    if (parts.length >= 2) {
        return parts.slice(1).join('/');
    }
    return null;
}