<template lang="pug">
    b-container#app.m-0.p-0( fluid )
        navigation-component( :isMobile="isMobile" )
        b-row.m-0.p-0
            transition(
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutRight"
                mode="out-in" )
                router-view( :isMobile="isMobile" )
        footer-component( :isMobile="isMobile" )
        vue-snotify
        modal-component( :isMobile="isMobile" )
        check-modal( :isMobile="isMobile" )
        success-modal( :isMobile="isMobile" )
        error-modal( :isMobile="isMobile" )
        feedback-modal( :isMobile="isMobile" )
</template>
<script>
    import { isMobile } from 'mobile-device-detect';
    export default {
        data() {
          return {
              isMobile: isMobile
          }
        },
        mounted() {
            document.addEventListener('click', this.clickEffect)
        },
        methods: {
            clickEffect(e){
                let d=document.createElement("div");
                d.className="clickEffect";
                d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
                document.body.appendChild(d);
                d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
            }
        }
    }
</script>
<style lang="scss">
</style>
