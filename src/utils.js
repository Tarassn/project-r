export function sortBy(fn, xs,operator) {
    return [...xs].sort((x1, x2) => {
        return fn(x2) > fn(x1) ? -1 * operator : 1 * operator
    })
}

export function toDict(xs, key) {
    return xs.reduce((z, x) => ({...z, [x[key]]: x}), {})
}

export function toArray(obj, key, operator) {
    return sortBy(x => x[key], Object.keys(obj).map(key => obj[key]), operator)
}