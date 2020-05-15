
const localStorageKeyPrefix = ;
const localStorageKey = {
    some: localStorageKeyPrefix + "some"
};

// some

export function some(): string | null {
    return localStorage.getItem(localStorageKey.some)
}

export function setSome(some: string) {
    localStorage.setItem(localStorageKey.some, some)
}
