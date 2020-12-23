<template>
    <h2>{{txtMessage.txt}}</h2>
</template>

<script>
export default {
    props: [
        'message'
    ],
    inject: ['txtMessage']
}
</script>