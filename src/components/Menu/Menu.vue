<template>
    <div class="menu">
        <div class="menu__brand"><img :src="logo"/></div>
        <div class="menu__nav">
            <Nav/>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import logo from './../../assets/imgs/logo.png';

export default {
  name: 'Menu',
  components: {
    Nav
  },
  data(){
    return {
      logo
    }
  }
}
</script>

<style lang='scss'>

    @import '../../assets/scss/styles.scss';

    .menu {
        width:100%;
        height:110px;

        &__nav{
            float:right;
            @include screen(md){
                position:absolute;
                top:0;
                left:0;
                float: none;
            }
        }

        &__brand{
            position:absolute;
            top:0;
            left:0;
            padding: $spacingBase;
            @include screen(md){
                float:right;
                position: relative;
                top:0;
                left:auto;
            }

            img{
                width:150px;
                @include screen(md){
                    width:175px;
                }
            }
        }
    }




</style>


