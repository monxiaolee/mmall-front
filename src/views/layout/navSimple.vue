<template>
<div class="nav-simple">
    <div class="w">
        <router-link :to="'/login'">
            <a class="logo">TEST</a>
        </router-link> 
    </div>
</div>
</template>
<script>
export default {
    name: 'navSimple',
    components: {

    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.nav-simple{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    background: #fff;
}
.nav-simple .logo{
    font-size: 26px;
    font-weight: bold;
    color: #c60023;
    text-decoration: none;
}
</style>

