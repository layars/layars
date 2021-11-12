<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import Button from './Button.svelte'
</script>

<Meta 
    title='@layars/ui/button'
    component={Button}
    argTypes={{
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost']
        }
    }}
/>

<Template let:args>
    <Button
        on:click={action('on:click')}
        {...args}
    >
        Button
    </Button>
</Template>

<Story 
    name='primary'
/>