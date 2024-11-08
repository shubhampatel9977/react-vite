
const AppBaseUrl = import.meta.env.VITE_BASH_IMAGE_PATH;

export function setImagePath(data) {
    if (data == null || data == undefined || data == '') {
        return null;
    } else {
        return `${AppBaseUrl}/${data}`
    }
};
