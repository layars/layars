<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import IconButton from './IconButton.svelte'
    import Placeholder from '@layars/icons/src/lib/Placeholder/Placeholder.svelte'
</script>

<Meta 
    title='@layars/components/IconButton'
    component={IconButton}
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
        }
    }}
/>

<Template let:args>
    <IconButton
        on:click={action('on:click')}
        on:focus={action('on:focus')}
        {...args}
    >
        <Placeholder />
    </IconButton>
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