import Button from './Button.svelte'
import { render, fireEvent } from '@testing-library/svelte'
import { jest } from '@jest/globals'

/**
 * Test the the button component renders in the dom
 */
test('Button renders', () => {
    const { getByRole } = render(Button)
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
})

/**
 * Test that the button click event fires correctly
 */
test('Button click event fires', () => {
    const { component, getByRole } = render(Button)
    const handleClick = jest.fn()
    component.$on('click', handleClick)
    const button = getByRole('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
})

/**
 * Test that the button focus event fires correctly
 */
test('Button focus event fires', () => {
    const { component, getByRole } = render(Button)
    const handleFocus = jest.fn()
    component.$on('focus', handleFocus)
    const button = getByRole('button')

    fireEvent.focus(button)
    expect(handleFocus).toHaveBeenCalled()
})

/**
 * Test the different variants of the button
 */
test('Button variants', () => {
    const variants = ['primary', 'secondary', 'basic', 'danger']
    variants.forEach(variant => {
        const { getByTestId } = render(Button, { props: { variant: variant, 'data-testid': variant }})
        const button = getByTestId(variant)

        expect(button).toHaveClass(`variant--${variant}`)
    })
})

/**
 * Test the different sizes of the button
 */
test('Button sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg']
    sizes.forEach(size => {
        const { getByTestId } = render(Button, { props: { size: size, 'data-testid': size }})
        const button = getByTestId(size)

        expect(button).toHaveClass(`size--${size}`)
    })
})

/** Test the different button types */
test('Button types', () => {
    const types = ['button', 'submit', 'reset']
    types.forEach(type => {
        const { getByTestId } = render(Button, { props: { type: type, 'data-testid': type }})
        const button = getByTestId(type)

        expect(button).toHaveAttribute("type", type)
    })
})

/**
 * Test the button disabled state
 */
test('Button disabled state', () => {
    const { getByTestId } = render(Button, { props: { disabled: true, 'data-testid': 'disabled' }})
    const button = getByTestId('disabled')

    expect(button).toBeDisabled()
})

/**
 * Test the depressed state
 */
 test('Button depressed state', () => {
    const { getByTestId } = render(Button, { props: { depressed: true, 'data-testid': 'depressed' }})
    const button = getByTestId('depressed')

    expect(button).toHaveClass('depressed')
})

/**
 * Test that you can pass custom class prop to element
 */
test('Button custom classes', () => {
    const { getByTestId } = render(Button, { props: { class: 'custom-class', 'data-testid': 'class' }})
    const button = getByTestId('class')

    expect(button).toHaveClass('custom-class')
})