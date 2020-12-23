<template>
    <div class="container">
        <ul v-for="item in storage" :key="item.id">
            <base-card>
                <li><strong>Item: </strong>{{item.item}}</li>
                <li><strong>Color: </strong>{{item.color}}</li>
                <li><strong>Price: </strong>{{item.price}} GEL</li>
                <li class="row">
                    <base-button @click="addCart(item.id)">
                        <i class="fas fa-cart-plus"></i>
                    </base-button>
                    <base-button @click="detail(item.id)">Detail</base-button>
                </li>
            </base-card>
        </ul>
    </div>
</template>

<script>
export default {
    emits: ['detail-found'],
    inject: ['storage', 'addCart'],
    data() { 
        return {
            detailVisible: false,
            id: 123
        }
    },
    methods: {
        detail(id) {
            const detailFound = this.storage.find(item => item.id === id)
            this.$emit('detail-found', detailFound)
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>