<template>

</template>

<script>
export default {
    methods: {
        closeBtn() {
            this.$emit('close-modal')
        },
        saveBtn() {
            this.$emit('save-changes')
        }
    }
}
</script>