<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>


<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button {
    padding: 0.5rem 1rem;
    margin-right: 2px;
    font-family: inherit;
    background-color: hsl(36, 82%, 53%);
    border: 1px solid hsl(36, 82%, 53%);
    border-radius: 5px;
    color: #ffffff;
    font: ;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color:  hsla(36, 82%, 53%, 0.685);
    border-color:  hsla(36, 82%, 53%, 0.199);
}
.flat {
    background-color: hsla(36, 82%, 53%, 0.24);
    color: hsl(36, 100%, 55%);
    border: none;
}
</style>