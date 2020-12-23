<template>
    <base-card>
        <div class="row">
            <base-button @click="setSelectedTab('the-home')" :mode='theHomeSelected'>Home</base-button>
            <base-button @click="setSelectedTab('add-item')" :mode='addItemSelected'>Add Item</base-button>
            <base-button @click="setSelectedTab('the-cart')" :mode='theCartSelected'>Cart</base-button>
        </div>
    </base-card>
    <div v-if="selectedDetail">
        <the-detail
            :detail-from-parent='detailItem'
            :selected-tab='setSelectedTab'
            @go-home="goHomePage"
        ></the-detail>
    </div>
    <div v-else-if="selectedTab === 'the-home'">
        <the-home
            @detail-found="detailInParent"
        ></the-home>
    </div>
    <div v-else-if="selectedTab === 'add-item'">
        <add-item></add-item>
    </div>
    <div v-else-if="selectedTab === 'the-cart'">
        <the-cart></the-cart>
    </div>
</template>

<script>

import TheHome from './TheHome.vue'
import AddItem from './AddItem.vue'
import TheCart from './TheCart.vue'
import TheDetail from './TheDetail.vue'

export default {
    components: {
        TheHome,
        AddItem,
        TheCart,
        TheDetail
    },
    provide() {
        return {
            storage: this.storage,
            cart: this.cart,
            addItem: this.addItem,
            addCart: this.addCart
        }
    },
    
    data() {
        return {
            detailItem: '',
            selectedDetail: false,
            selectedTab: 'the-home',
            storage: [
                {
                    id: 'iphoneX',
                    item: 'iphone X',
                    color: 'black',
                    price: 965,
                    ram: 16,
                    memory: 64,
                    camera: 26
                },
                {
                    id: 'xiaom',
                    item: 'xiaom m2 lite',
                    color: 'blue',
                    price: 480,
                    ram: 6,
                    memory: 64,
                    camera: 20
                },
                {
                    id: 'samsungA2',
                    item: 'samsung A2',
                    color: 'lightblue',
                    price: 600,
                    ram: 6,
                    memory: 16,
                    camera: 15
                }
            ],
            cart: []
        }
    },
    methods: {
        addItem(item, color, price, ram, memory, camera) {
            const newItem = {
                id: new Date().toISOString(),
                item,
                color,
                price,
                ram,
                memory,
                camera
            }
            this.storage.unshift(newItem)

            this.selectedTab = 'the-home'
            
        },
        addCart(id) {
            const cartItemFound = this.storage.find(item => item.id === id)
            if(this.cart.includes(cartItemFound)) {
                alert('This item arleady exist')
            }
            else {
                this.cart.unshift(cartItemFound)
            }
        },

        setSelectedTab(tab) {
            this.selectedTab = tab
            this.selectedDetail = false
        },
        detailInParent(item){
            this.detailItem = item
            this.selectedDetail = true
        },
        goHomePage() {
            this.selectedDetail = false
        }
    },
    computed: {
        addItemSelected() {
            return this.selectedTab === 'the-cart' || this.selectedTab === 'the-home' ? 'flat' : null
        },
        theHomeSelected() {
            return this.selectedTab === 'add-item' || this.selectedTab === 'the-cart' ? 'flat' : null
        },
        theCartSelected() {
            return this.selectedTab === 'add-item' || this.selectedTab === 'the-home' ? 'flat' : null
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>