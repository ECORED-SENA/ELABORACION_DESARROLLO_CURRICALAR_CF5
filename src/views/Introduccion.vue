<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(src="@/assets/curso/introduccion/1.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") La guía de aprendizaje y los recursos educativos son elementos fundamentales en el desarrollo curricular. #[br] En el siguiente recurso, se invita a revisar la introducción a este componente.
    p.mt-3(data-aos="fade-up") ¿En qué consiste la biorremediación de aguas y suelos? Ver el siguiente video para conocer de qué se trata este proceso:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/M9INIL55q1g" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
