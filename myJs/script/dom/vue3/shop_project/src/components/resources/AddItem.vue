<template>
    <section>
        <base-card>
            <div class="row">
                <h2>Add Item</h2>
            </div>
            <div class="content">
                <form @submit.prevent="enteredValue">
                    <div class="form-control">
                        <label for="item">Item</label>
                        <input type="text" name="item" id="item" ref="item">
                    </div>
                    <div class="form-control">
                        <label for="color">Color</label>
                        <input type="text" name="color" id="color" ref="color">
                    </div>
                    <div class="form-control">
                        <label for="price">Price</label>
                        <input type="text" name="price" id="price" ref="price">
                    </div>
                    <div class="form-control">
                        <label for="ram">Ram</label>
                        <input type="text" name="ram" id="ram" ref="ram">
                    </div>
                    <div class="form-control">
                        <label for="memory">Memory</label>
                        <input type="text" name="memory" id="memory" ref="memory">
                    </div>
                    <div class="form-control">
                        <label for="camera">Camera</label>
                        <input type="text" name="camera" id="camera" ref="camera">
                    </div>
                    <div class="row">
                        <base-button>Add</base-button>
                    </div>
                </form>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    inject: ['addItem'],
    methods: {
        enteredValue() {
            this.addItem(this.$refs.item.value,
                            this.$refs.color.value,
                            this.$refs.price.value,
                            this.$refs.ram.value,
                            this.$refs.memory.value,
                            this.$refs.camera.value);
            
            this.$refs.item.value = ''
            this.$refs.color.value = ''
            this.$refs.price.value = ''
            this.$refs.ram.value = ''
            this.$refs.memory.value = ''
            this.$refs.camera.value = ''
        }
    }
}
</script>

<style scoped>
.content {
    max-width: 50%;
    margin: auto;
}
.row {
    display: flex;
    justify-content: center;
    align-items: center;
}
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc
}
input:focus,
textarea:focus {
    outline: none;
    border-color: hsl(36, 82%, 53%);
    background-color: hsla(36, 82%, 53%, 0.123);
}
.form-control {
    margin: 1rem 0;
}
</style>