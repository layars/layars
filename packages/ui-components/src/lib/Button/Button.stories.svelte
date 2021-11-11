<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Button from './Button.svelte'
</script>

<Meta 
    title='@layars/ui/button'
    component={Button}
/>

<Template let:args>
    <Button {...args}>Button</Button>
</Template>

<Story 
    name='primary'
/>