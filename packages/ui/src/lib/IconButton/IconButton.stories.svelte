<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action, actions } from '@storybook/addon-actions'
    import IconButton from './IconButton.svelte'
    import { Placeholder } from '@layars/icons'
import { exclude_internal_props } from 'svelte/internal'
</script>

<Meta 
    title='@layars/ui/IconButton'
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
        shape: {
            control: 'select',
            options: ['default', 'circle'],
            defaultValue: 'default',
            description: 'The shape of the icon button.'
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
    parameters= {{
        controls: {
            exclude: ['click', 'focus', 'default']
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
        shape: 'default',
        disabled: false,
        depressed: false
    }}
/>