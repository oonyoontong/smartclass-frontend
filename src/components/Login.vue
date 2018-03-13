<template>
    <div class = "login_page">
        <nav id = "header" class = "col-md-12">
            <img src="../assets/app-icon.png" id="app-icon" height="50" width="50">
        </nav>
        <div class = "col-md-4 offset-md-4 text-center" id = "wrapper">
            <form @submit.prevent="login" class = "form-signin" >
                <h3 align="left" id = "login_label"><strong>Login</strong></h3><br/>
                <p v-if="error" class="alert alert-danger alert-dismissible fade show">Invalid username or password!</p>
                <input v-model="username" class = "form-control" placeholder="Username">
                <input v-model="password" class = "form-control" placeholder="Password" type="password"> <br>
                <button type="submit" class = "btn btn-primary btn-block">Sign In</button>


            </form>
        </div>
    </div>
</template>


<!--<h2>Login</h2>
        <p v-if="$route.query.redirect">
            You need to login first.
        </p>
        <div class = "col-md-4 offset-md-4 text-center">
        <form @submit.prevent="login">
            <p v-if="error" class="alert alert-danger alert-dismissible fade show">Invalid username or password!</p>
            <input v-model="username" class = "form-control" placeholder="Username">
            <input v-model="password" class = "form-control" placeholder="Password" type="password"> <br>
            <button type="submit" class = "btn btn-primary">Login</button>


        </form>
        </div>-->


<script>
    import auth from '../auth';


    export default {
        name: "login",
        data(){
            return {
                username: "",
                password: "",
                error: false
            }
        },

        methods:{
            login(){
                console.log('attempting login');
                auth.login(this.username,this.password,loggedIn =>{
                    console.log("finished checking");
                    if (!loggedIn){
                        console.log("error");
                        this.error = true;
                    } else {
                        console.log("attempting to route to dashboard");
                        this.$router.push('dashboard');
                    }
                })
            }
        }

    }
</script>

<style scoped>
    #app-icon{
        margin: 10px;
    }


    #header{
        background-color: rgba(0,0,0,0.3);
    }

    .login_page{
        background-repeat: no-repeat;
        height: 100vh;
        background-size: cover;
        overflow:hidden;
        background-image: url(../assets/login-background.jpg);
    }

    #login_label{
        color: #ffffff;
    }

    #wrapper {
        margin-top: 200px;
        margin-bottom: 20px;
    }

    .form-signin {
        width: 100%;
        padding: 30px 38px 66px;
        margin: 0 auto;
        background-color: rgba(0,0,0,0.3);
    }



    .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        margin-top: 10px;
    }

    input[type="text"] {
        margin-bottom: 0px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    input[type="password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .btn-primary{
        background-color: #31a9c1;
    }

</style>