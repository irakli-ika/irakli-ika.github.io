<template>
    <header>
        <h1>Online Shoping</h1>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&display=swap');

header {
    background-color:hsl(36, 82%, 53%);
    padding: 20px 0;
    text-align: center;
}
h1 {
    position: relative;
    font-size: 40px;
    font-family: 'Lora', serif;
    color: hsl(51, 5%, 30%);
    max-width: 20rem;
    margin: auto;
    user-select: none;
    cursor: pointer;
}
h1::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5%;
    bottom: 0;
    left: 0;
    background-color:  hsla(36, 82%, 53%, 0.089);
    z-index: 777;
    animation-iteration-count: 3;
    animation: underLine 2s forwards;
}
@keyframes underLine {
    0% {
        width: 0;
        
    }
    100% {
        background-color: hsl(51, 5%, 30%);
        width: 100%;
    }
}
</style>