<template lang="pug">
    b-container#app.m-0.p-0( fluid )
        navigation-component
        b-row.m-0.p-0
            transition(
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeout"
                mode="out-in" )
                router-view
        vue-snotify
        modal-component
        check-modal
        success-modal
        error-modal
</template>
<script>
    export default {
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
