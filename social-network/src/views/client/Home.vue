<template>
    <div>
        <h1>{{welcomeMessage}}</h1>
        <img alt="Vue logo" src="../../assets/logo.png">
    </div>
</template>
<script>
export default {
    name : 'Home',
    data() {
        return{
            welcomeMessage : 'Welcome to the home page!'
        }
    }
}
</script>
