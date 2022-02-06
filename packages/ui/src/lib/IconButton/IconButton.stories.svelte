<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import IconButton from './IconButton.svelte'
    import { Placeholder } from '@layars/icons'
</script>

<Meta 
    title='@layars/ui/IconButton'
    component={IconButton}
    argTypes={{
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['basic', 'primary', 'secondary', 'danger'],
        },
        shape: {
            control: 'select',
            options: ['default', 'circle'],
        },
        disabled: {
            control: 'boolean',
        },
        depressed: {
            control: 'boolean',
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
        variant='primary'
        size='md'
        shape='default'
        disabled={false}
        depressed={false}
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