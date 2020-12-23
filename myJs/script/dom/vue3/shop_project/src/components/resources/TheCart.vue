<template>
    <div class="container">
        <div class="flex">
            <div class="cart-alert" v-if="cart.length === 0">
                <h2>Your cart is empty</h2>                
            </div>
            <ul v-for="item in cart" :key='item.id'>
                <base-card>
                    <ul>
                        <li><strong>Item: </strong>{{item.item}}</li>
                        <li><strong>Color: </strong>{{item.color}}</li>
                        <li><strong>Price: </strong>{{item.price}} GEL</li>
                        <li><strong>Ram: </strong>{{item.ram}} GB</li>
                        <li><strong>Memory: </strong>{{item.memory}} GB</li>
                        <li><strong>Camera: </strong>{{item.camera}}</li>
                    </ul>
                    <div class="row">
                        <base-button @click="removeCartItem(item.id)">Remove</base-button>
                    </div>
                </base-card>
            </ul>            
        </div>
    </div>
</template>

<script>
export default {
    inject: ['cart'],
    methods: {
        removeCartItem(id) {
            const indexOfItem = this.cart.findIndex(item => item.id === id)
            this.cart.splice(indexOfItem, 1)
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
ul {
    width: 19rem;
}
li {
    list-style-type: none;
    padding: .5rem 1rem;
}
.cart-alert {
    margin: auto;
}
@media (max-width: 680px) {
    .flex {
        flex-direction: column;
        align-items: center;
    }
}
</style>