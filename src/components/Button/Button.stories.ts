import Button from './Button.vue'

export default {
    title: 'Components/Button',
    component: Button
}

export const Default = () => ({
    components: { Button },
    template: '<Button>Click me</Button>'
})
