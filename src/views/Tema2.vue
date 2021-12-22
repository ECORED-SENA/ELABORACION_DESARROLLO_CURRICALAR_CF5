<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Recursos educativos

    .row
      .col-lg-7
        p(data-aos="fade-right") El equipo de desarrollo curricular puede #[strong(style="color:#FF6B00 !important;font-style:italic;text-decoration: underline;") elaborar o sugerir] los materiales de apoyo que sean necesarios en el proceso formativo y su alcance es importante, porque informa y profundiza sobre los contenidos propuestos desde el desarrollo curricular y permiten actualizar a los Instructores en el uso de nuevas tecnologías y la creación e innovación de nuevos diseños de los programas.
        p.mt-3(data-aos="fade-right") Los recursos educativos o medios didácticos pueden definirse según Blázquez y Lucero (2002, p. 186) como:
        .bloque-texto-b.color-secundario.p-2(style="border-top: 1px #FF6B00 solid;")
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="display:contents;" data-aos="fade-right")
            p.mb-0(data-aos="zoom-in") &nbsp;&nbsp;&nbsp;Cualquier recurso que el profesor prevea emplear en el diseño o desarrollo del currículo (por su parte o la de los alumnos) para aproximar o facilitar los contenidos, mediar en las experiencias de aprendizaje, provocar encuentros o situaciones, desarrollar habilidades cognitivas, apoyar sus estrategias metodológicas o facilitar o enriquecer la evaluación.
            div(style="text-align:right;")
              i.fas.fa-quote-right(style="display:block;" data-aos="fade-left")
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/1.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Ahora bien, para desarrollar programas virtuales o uso de tecnología para programas presenciales, se sugiere diseñar recursos educativos digitales que se definen así:

    .bloque-texto-b.color-secundario.p-4.col-lg-7.m-auto
      .bloque-texto-b__texto
        i.fas.fa-quote-left(style="display:contents;" data-aos="fade-right")
        p.mb-0(data-aos="zoom-in") &nbsp;&nbsp;&nbsp;Son información en formato digital que se caracterizan por estar codificados para ser almacenados en un computador y a los que se pueden acceder bien sea de manera directa o mediante un acceso remoto. Cuando este material tiene un objetivo de carácter educativo busca apoyar procesos de enseñanza, aprendizaje, desarrollar determinadas competencias y tiene un diseño que revela una intencionalidad pedagógica y didáctica se le denomina recurso educativo digital.
        div(style="text-align:right;")
          i.fas.fa-quote-right(style="display:block;" data-aos="fade-left")

    Separador
    .titulo-segundo.mt-5
      h2#t_2_1 2.1  Tipos de recursos educativos
    p(data-aos="fade-up") De acuerdo con Moya (2010), los recursos educativos se pueden clasificar en:

    .row.mt-4
      .col-lg-6
        ul.lista-ul
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Textos impresos:] manual o libro de estudio, libros de consulta y/o lectura, biblioteca de aula y/o departamento, cuaderno de ejercicios, Impresos varios, material específico: prensa, revistas, anuarios.
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Material audiovisual:] proyectables, videos, películas, audios, tableros didácticos: pizarra tradicional.
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong #[span(style="background-color:#FFDB80;") Tecnologías de Infor]mación y Comunicación (TIC):] #[em software] educativo, programas informáticos (#[em DVD, pendrive y online]). Videojuegos, lenguajes de autor, actividades de aprendizaje, presentaciones multimedia, enciclopedias, animaciones, simulaciones interactivas y otras.
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Medios interactivos, multimedia e Internet, programas informáticos (CD u #[em online]) educativos:] videojuegos, lenguajes de autor, actividades de aprendizaje, presentaciones multimedia, enciclopedias, animaciones y simulaciones interactivas, TV y videos interactivos, 
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Servicios telemáticos:] páginas #[em web], #[em weblogs], #[em webquest], correo electrónico, chats, foros, unidades didácticas. 
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; Entornos virtuales de enseñanza y aprendizaje. Plataformas educativas, campus virtual, aula virtual, e-learning. 

      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-left")

    .bloque-texto-g.color-secundario.p-3.col-lg-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los #[strong(style="background-color:#FFDB80;") recursos educativos] son físicos y digitales, permiten la mediación pedagógica entre los aprendices y el objeto de conocimiento para promover la adquisición y el fortalecimiento de competencias, enriquecidos con la enseñanza del instructor, promoviendo la atención y motivación hacia el objeto de conocimiento, facilita atender los diversos estilos de aprendizaje, posibilitan la presentación de cualquier tipo de contenido.

    .row.mt-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/4.svg" data-aos="fade-right")
      .col-lg-7
        p(data-aos="fade-up") Para el SENA existen dos tipos de recursos educativos:
        ul.lista-ul.mt-4
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Materiales de apoyo a la formación directa:] elaborados por los instructores y orientan de manera directa al aprendiz en la información propia del programa de formación, es el material propio de la guía de aprendizaje, por ejemplo: manuales, clases grabadas por el instructor, textos elaborados por los instructores, webgrafía especializada propia suministrada por el instructor a los aprendices.
          li.pb-3(data-aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Materiales de apoyo complementarios:] son todos los materiales sugeridos que suministran información sobre temas de interés acorde a la formación, por ejemplo, biblioteca SENA, métodos de investigación.

    Separador
    .titulo-segundo.mt-5
      h2#t_2_2 2.2  Herramientas para la elaboración de recursos educativos

    p(data-aos="fade-up") Con miras a la elaboración de recursos educativos existen diversidad de herramientas y para elegir la adecuada se recomienda al instructor planear los recursos didácticos que usará de manera tal que mejoren su mediación pedagógica para alcanzar los resultados de aprendizaje.
    p.mt-3(data-aos="fade-up") Es necesario recordar que se deben utilizar las herramientas más familiarizadas para desarrollar los diversos recursos, por ejemplo para presentar contenidos existen herramientas convencionales como las presentaciones de Office u Openoffice hasta aquellas que permiten el movimiento y la interacción dinámica; la elección dependerá de la apropiación de estas y la intencionalidad pedagógica para la presentación de los contenidos.

    ul.lista-ul.mt-4.col-lg-6.m-auto
      li(data-aos="fade-up")
        p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] #[span #[a(style="color:#A757F7" href="https://genial.ly/es/" target="_blank") https://genial.ly/es/]] para crear y compartir contenido vistoso.
      li(data-aos="fade-up")
        p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] #[span #[a(style="color:#A757F7" href="https://genial.ly/es/" target="_blank") https://genial.ly/es/]] en la implementación de la gamificación.
      li(data-aos="fade-up")
        p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] #[span #[a(style="color:#A757F7" href="https://kahoot.com/es/" target="_blank") https://kahoot.com/es/]] en evaluaciones y #[em quizzes].

    figure.mt-5
      img(src="@/assets/curso/tema2/5.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") El SENA soporta su proceso de formación recursos educativos sobre una plataforma LMS (#[em Learning Management System] por sus siglas en inglés), e invita a los instructores a utilizarla alojando sus recursos en esta plataforma e invitando a los aprendices a que la usen y dispongan sus evidencias en este espacio virtual.

    p.mt-3(data-aos="fade-up") Como recurso adicional se tiene configurado un espacio de trabajo y almacenamiento (Works Pace Google), para ingresar a él se deben gestionar las credenciales de ingreso en #[a(style="color:#A757F7" href="http://www.misena.edu.co/" target="_blank") http://www.misena.edu.co/] y así acceder al correo electrónico de #[a(style="color:#A757F7" href="https://mail.google.com/" target="_blank") https://mail.google.com/], configurar las aplicaciones de almacenamiento en la nube #[a(style="color:#A757F7;" href="https://drive.google.com/" target="_blank") https://drive.google.com/], o también se puede diseñar fácilmente un repositorio o micrositio #[em web] en #[a(style="color:#A757F7;" href="https://sites.google.com/" target="_blank") https://sites.google.com/]

    p.mt-3(data-aos="fade-up") Existen en la web diversos recursos educativos ya diseñados que pueden ser útiles para enriquecer y recrear las actividades que se propongan en la guía, es fundamental hacer curaduría de recursos ya diseñados, que tengan clara la intencionalidad pedagógica y didáctica del recurso a usar y probarlo primero antes de proponerlo a los aprendices en la guía de aprendizaje.

    .bloque-texto-g.color-secundario.p-3.col-lg-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0(data-aos="fade-up") El SENA tiene la plataforma LMS #[a(style="color:#A757F7" href="https://lms.cloudlabs.us/" target="_blank") https://lms.cloudlabs.us/] con más 600 laboratorios virtuales, recursos que se pueden configurar en el contenido del curso en el LMS Territorium, use y promueva en los aprendices el uso de imágenes, videos y audios de manera que los comprometa y los involucre en el uso y aplicación de la tecnología para el desarrollo de sus actividades académicas y técnicas laborales propuestas. Se le invita a revisarlo.

    br
    .row.mt-5
      .col-lg-7
        p(data-aos="fade-right") Finalmente, se recuerda que el uso adecuado y pertinente de recursos educativos en diversos formatos en nube, brinda a los aprendices diversas herramientas conceptuales, cognitivas y habilidades, logrando trabajar de manera colaborativa en línea, al compartir materiales pertinentes para el desarrollo de las actividades propuestas en la guía de aprendizaje SENA, como ejemplo los organizadores gráficos #[a(style="color:#A757F7" href="https://eduteka.icesi.edu.co/modulos/4/86/718/1" target="_blank") https://eduteka.icesi.edu.co/modulos/4/86/718/1] fortaleciendo las competencias de los futuros ciudadanos del siglo XXI.
        p.mt-3(data-aos="fade-right") Actualmente se utilizan diferentes herramientas para el diseño de los recursos educativos digitales, estas permiten a personas con pocos o nulos conocimientos en programación y diseño elaborar recursos con aplicaciones multimedia. 
        p.mt-3(data-aos="fade-right") Algunas de estas herramientas permiten hacer un trabajo #[em online], pero también hay herramientas que pueden ser trabajadas de manera #[em offline] dependiendo de la necesidad de aplicación del recurso.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/7.svg" data-aos="fade-left")

    .row.mt-5.cont-1(style="position:relative;z-index:2")
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/8.svg" data-aos="fade-right")
      .col-lg-7.row.mt-5(style="place-self:center;")
        .col-lg-4(style="place-self:center;")
          ul.lista-ul
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; PIXLR
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; LIM
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; AUDACITY
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; glomarker.org
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; LAMS
        .col-lg-4(style="place-self:center;")
          ul.lista-ul
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Cuadernia
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Screencast Matic
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; TexToys
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Constructor
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Myscarpbook
        .col-lg-4(style="place-self:center;")
          ul.lista-ul
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Quandary
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Genially
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Powtoon
            li(data-aos="fade-up" style="")
              p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; TikaTok

    p.mt-4(data-aos="fade-up") Lo invitamos a que revise cada herramienta y siga los tutoriales para su uso.



  
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.bloque-texto-g.color-secundario
    background-color: #FF6B00
.bloque-texto-b.color-secundario:before
    background-color: #FFEDBF
.bloque-texto-b i
  color: #5A189A
.cont-1:before
  content: ''
  position: absolute
  background-color: #FFF8F3
  z-index: -1
  width: 100%
  height: 80%
  top: 20%
</style>
