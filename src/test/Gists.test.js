import { render } from '@testing-library/react'
import ForTest from '../ForTest'

describe('we want to test gists', () => {
    it('we want to compare snapshot', () => {
        const view = render(<ForTest />)
        expect(view).toMatchSnapshot()

    })
})