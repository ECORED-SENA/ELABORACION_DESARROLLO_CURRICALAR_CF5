<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.curso-main-container > .container
  overflow-x: clip !important
.titulo-principal__numero
  background-color: #5A189A
.titulo-principal__numero span
  color: white
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding: 0px !important
.titulo-principal__numero span
  color: white !important
.titulo-segundo:after
  border-left-color: #FF6B00 !important
</style>
