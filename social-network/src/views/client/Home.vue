<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 my-4">
                    <h1>{{welcomeMessage}}</h1>
                </div>
            </div>
            <div v-if="active" class="row">
                <div class="col-md-12">
                    <p>Boostrap is on the board.. so feel free to use it in your tamplates.</p>
                </div>
                <div class="col-md-6 text-center">
                    <img height="200" alt="Vue logo" src="../../assets/logo.png">
                    <br>
                    <a target="_blank" class="btn btn-primary mt-4" href="https://vuejs.org/">Vue</a>
                </div>
                <div class="col-md-6 text-center">
                    <img height="200" width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="" srcset="">
                    <br>
                    <a target="_blank" class="btn btn-primary mt-4" href="https://getbootstrap.com/">Boostrap</a>
                </div>
                <div class="col-md-12" style="margin-top: 10vh">
                    <button @click="hanldeClick" class="btn btn-danger">Don't click here!</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Home',
    data() {
        return{
            welcomeMessage : 'Welcome to the home page!',
            active: true
        }
    },
    mounted(){
    },
    methods: {
        hanldeClick(){
            this.welcomeMessage = 'Opps.. you broke the app.. :(';
            this.active = false;
        }
    }
}
</script>
