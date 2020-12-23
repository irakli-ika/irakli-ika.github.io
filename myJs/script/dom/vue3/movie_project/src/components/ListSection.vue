<template>
    <div class="card col-3 mx-3 mb-3" style="width: 18rem; height: 35rem" :id="this.id">
        <div class="card-body px-0 text-center">
            <h5 class="card-title">{{name}}</h5>
            <ul class="p-0 text-left">
                <li class="card-text pt-2" style="list-style-type: none"><strong>რეჟისორი:</strong> {{director}}</li>
                <li class="card-text pt-2" style="list-style-type: none"><strong>ჟანრი:</strong> {{genre}}</li>
                <li class="card-text pt-2" style="list-style-type: none"><strong>ქვეყანა:</strong> {{country}}</li>
                <li class="card-text pt-2" style="list-style-type: none"><strong>წელი:</strong> {{year}}</li>
                <li class="card-text pt-5" style="list-style-type: none"><strong>ფილმის სიუჟეტი:</strong></li>
                <p class="overflow-auto py-2" style="height: 15rem">{{description}}</p>
            </ul>
            <div class="position-absolute fixed-bottom main__div py-2">
                <button class="btn btn-primary edit__bottom mr-2" @click="_edit">რედაქტირება</button>
                <button class="btn btn-danger delete__bottom" @click="_delete">წაშლა</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits:[
        'edit-element',
        'delete-element'
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

    },
    methods: {
        _edit(){
            this.$emit('edit-element', this.id)
        },
        _delete(){
            this.$emit('delete-element', this.id)
        }
    }
}
</script>

<style scoped>
    .main__div{
        width: 100%;
        height: 50px;
    }
</style>