import Placeholder from './Placeholder.svelte'
import { render } from '@testing-library/svelte'

/**
 * Test the the button component renders in the dom
 */
test('Placeholder renders', () => {
    const { getByTestId } = render(Placeholder, { props: { 'data-testid': 'placeholder-icon'}})
    const placeholder = getByTestId('placeholder-icon')

    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveClass('icon')
    expect(placeholder).toHaveClass('icon-placeholder')
})