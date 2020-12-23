<template>
    <div class="editorModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title m-auto">რედაქტირება</h5>
                </div>
                <div class="modal-body" :id="id">
                    <div class="d-flex flex-column align-items-center">
                        <label>სახელი:</label>
                            <input type="text" :value="name" @input="getNameValue">
                        <label>რეჟისორი:</label>
                            <input type="text" :value="director" @input="getDirectorValue">
                        <label>ჟანრი:</label>
                            <input type="text" :value="genre" @input="getGenreValue">
                        <label>ქვეყანა:</label>
                            <input type="text" :value="country" @input="getCounrtyValur">
                        <label>წელი:</label>
                            <input type="text" :value="year" @input="getYearValue">
                        <label>აღწერა:</label>
                            <textarea cols="60" rows="8" :value="description" @input="getDescriptionValue"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeBtn">დახურვა</button>
                    <button type="button" class="btn btn-primary" @click="saveEditBtn">შენახვა</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Buttons from './Buttons.vue'

export default {
    // components: { Buttons },
    emits: [
        'close-modal',
        'save-edit-changes'
    ],
    props: [
        'id',
        'name',
        'director',
        'genre',
        'year',
        'country',
        'description'
    ],
    data() {
        return {
            nameValue: '',
            directorValue: '',
            genreValue: '',
            counrtyValur: '',
            yearValue: '',
            descriptionValue: ''
        }
    },
    methods: {
        // get input value
        getNameValue(event) {
            this.nameValue = event.target.value
        },
        getDirectorValue(event) {
            this.directorValue = event.target.value
        },
        getGenreValue(event) {
            this.genreValue = event.target.value
        },
        getCounrtyValur(event) {
            this.counrtyValur = event.target.value
        },
        getYearValue(event) {
            this.yearValue = event.target.value
        },
        getDescriptionValue(event) {
            this.descriptionValue = event.target.value
        },
        
        // end input value
        closeBtn() {
            this.$emit('close-modal')
            
        },
        saveEditBtn() {
            this.$emit('save-edit-changes',
                this.id,
                this.nameValue,
                this.directorValue,
                this.genreValue,
                this.counrtyValur,
                this.descriptionValue
            )           
        }
    }
}
</script>