export const functionforscroll = (elementID) => {
    if (isNotNullAndUndefined(elementID)) {

        let element = document.getElementById(elementID);
        if (isNotNullAndUndefined(element)) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    }
};

export function getLocalStorage(
    storageKey: string,
) {
    if (isNotNullAndUndefined(storageKey)) {
        const outVal = window.localStorage.getItem(storageKey);
        return outVal;
    }
    return null;
}
export function removeLocalStorage(
    storageKey: string,
) {
    if (isNotNullAndUndefined(storageKey)) {
        window.localStorage.removeItem(
            storageKey
        );
    }
}

export function setLocalStorage(
    storageKey: string,
    value: any
) {
    if (isNotNullAndUndefined(storageKey)) {
        window.localStorage.setItem(storageKey, value);
    }
}

export function isArray(val) {
    if (Array.isArray(val)) {
        return true;
    }
    return false;
}

export function isNotNullAndUndefined(s: any) {
    return s !== null && s !== undefined;
}

export function isNotEmptyArray(s: any) {
    if (isNotNullAndUndefined(s) && isArray(s) && s.length > 0) {
        return true;
    }
    return false;
}