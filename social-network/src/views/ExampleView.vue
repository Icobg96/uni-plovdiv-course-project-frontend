<template>
    <div>
        <!-- Here goes your view content -->
    </div>
</template>
<script>
export default {
    name : 'ExampleView',
    // vue data object
    data() {
        return{
            dataVariable : 'Here goes data vars(states).'
        }
    },
    mounted(){
        // hook which is called after the instance has been mounted
        //functions(not avalilable on current vue instance), ordinary vars (no reactive) etc
    },
    methods : {
        // here goes all methods
    }
}
</script>
