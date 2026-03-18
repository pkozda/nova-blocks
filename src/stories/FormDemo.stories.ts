import { ref } from 'vue'
import FormField from '../components/FormField/FormField.vue'
import Label from '../components/Label/Label.vue'
import Input from '../components/Input/Input.vue'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.vue'
import Button from '../components/Button/Button.vue'

export default {
    title: 'Compositions/Form Demo'
}

export const LoginForm = () => ({
    components: { FormField, Label, Input, ErrorMessage, Button },
    setup() {
        const email = ref('')
        const password = ref('')
        const error = ref('')

        const submit = () => {
            if (!email.value || !password.value) {
                error.value = 'Please fill all fields'
            } else {
                error.value = ''
                alert('Submitted')
            }
        }

        return { email, password, error, submit }
    },
    template: `
        <div style="max-width: 320px; display:flex; flex-direction:column; gap:16px;">
            
            <FormField>
                <Label>Email</Label>
                <Input v-model="email" placeholder="Enter email" />
            </FormField>

            <FormField>
                <Label>Password</Label>
                <Input v-model="password" placeholder="Enter password" />
            </FormField>

            <ErrorMessage :message="error" />

            <Button @click="submit">Login</Button>
        </div>
    `
})
