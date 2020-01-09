export const updateObject = (oldObject,updated) => {
    return {
        ...oldObject,
        ...updated
    }
}