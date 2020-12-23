import { createApp } from 'vue'
import App from './App.vue'
import ListSection from './components/ListSection.vue'
import EditForm from './components/EditForm.vue'
import AddForm from './components/AddForm.vue'



const app = createApp(App)

app.component('list-section', ListSection)
app.component('edit-form', EditForm)
app.component('add-form', AddForm)


app.mount('#app')
