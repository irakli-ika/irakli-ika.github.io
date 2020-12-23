<template>
    <div class="container">
        <header class='header'>
            <slot name="header"></slot>
        </header>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
    .container {
        max-width: 1100px;
        margin: auto;
    }
    .header,
    .content,
    .footer {
        margin-top: 20px;
        text-align: center;
        border: 1px solid black;
        box-shadow: 2px 5px 8px black;
    }
</style>