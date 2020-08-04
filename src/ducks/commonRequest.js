export const actionTypes = {
    REQUEST_START: 'REQUEST_START',
    REQUEST_ERROR: 'REQUEST_ERROR',
    REQUEST_DOWN: 'REQUEST_DOWN'
}

export const actions = {
    requestStart: () => ({
        type: actionTypes.REQUEST_START
    }),
    requestDown: () => ({
        type: actionTypes.REQUEST_DOWN
    }),
    requestError: (err) => ({
        type: actionTypes.REQUEST_ERROR,
        err
    })
}

