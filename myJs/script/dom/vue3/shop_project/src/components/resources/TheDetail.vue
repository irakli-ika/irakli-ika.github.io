<template>
    <base-card>
        <div class="btn-holder">
            <base-button @click="goBack">
                <i class="fas fa-arrow-left"></i>
            </base-button>
        </div>
        <base-card>
            <ul>
                <li><strong>Item: </strong>{{detailFromParent.item}}</li>
                <li><strong>Color: </strong>{{detailFromParent.color}}</li>
                <li><strong>Price: </strong>{{detailFromParent.price}} GEL</li>
                <li><strong>Ram: </strong>{{detailFromParent.ram}} GB</li>
                <li><strong>Memory: </strong>{{detailFromParent.memory}} GB</li>
                <li><strong>Camera: </strong>{{detailFromParent.camera}}</li>
            </ul>
        </base-card>
    </base-card>
</template>

<script>

export default {
    inject: ['storage'],
    props: ['detailFromParent'],
    emits: ['go-home'],

    methods: {
        goBack() {
            this.$emit('go-home')
        }
    }

}

</script>
