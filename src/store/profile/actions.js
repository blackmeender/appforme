export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const CHANGE_NAME = 'CHANGE_NAME'

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
})
export const exampleAction = {
    type: EXAMPLE_ACTION
}