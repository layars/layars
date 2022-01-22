<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import Button from './Button.svelte'
</script>

<Meta 
    title='@layars/ui/Button'
    component={Button}
    argTypes={{
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            description: 'The size of the button.'
        },
        variant: {
            control: 'select',
            options: ['basic', 'primary', 'secondary', 'danger'],
            defaultValue: 'primary',
            description: 'The button variant type'
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Is the button disabled'
        },
        depressed: {
            control: 'boolean',
            defaultValue: false,
            description: 'Is the button in a depressed state.'
        },
    }}
/>

<Template let:args>
    <Button
        on:click={action('on:click')}
        on:focus={action('on:focus')}
        {...args}
    >
        Button
    </Button>
</Template>

<Story 
    name='default'
    args={{
        variant: 'primary',
        size: 'md',
        disabled: false,
        depressed: false
    }}
/>