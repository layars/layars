import IconButton from './IconButton.svelte'
import { render, fireEvent } from '@testing-library/svelte'
import { jest } from '@jest/globals'

/**
 * Test that the button click event fires correctly
 */
 test('IconButton click event fires', () => {
    const { component, getByRole } = render(IconButton)
    const handleClick = jest.fn()
    component.$on('click', handleClick)
    const iconButton = getByRole('button')

    fireEvent.click(iconButton)
    expect(handleClick).toHaveBeenCalled()
})

/**
 * Test that the button focus event fires correctly
 */
test('IconButton focus event fires', () => {
    const { component, getByRole } = render(IconButton)
    const handleFocus = jest.fn()
    component.$on('focus', handleFocus)
    const iconButton = getByRole('button')

    fireEvent.focus(iconButton)
    expect(handleFocus).toHaveBeenCalled()
})