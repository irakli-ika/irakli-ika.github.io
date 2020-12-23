<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.content {
    box-shadow: 2px 2px 5px black;
    border-radius: 5px;
    margin: 2rem auto;
    padding: 1rem;
}

</style>