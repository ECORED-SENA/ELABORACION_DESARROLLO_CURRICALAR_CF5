<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición: ¿qué es una guía de aprendizaje?

    p(data-aos="fade-up") Es un recurso didáctico textual que facilita el desarrollo del aprendizaje bajo el enfoque constructivista descrito en el modelo pedagógico del SENA y mediado a través de las metodologías activas que buscan que el aprendizaje autónomo y colaborativo, a través del desarrollo de los #[strong(style="background-color:#FFDB80;") Resultados de Aprendizajes] propuestos según cada programa formativo. De acuerdo con la #[strong(style="background-color:#FFDB80;") Guía de desarrollo curricular SENA], la guía de aprendizaje se define como:

    figure.mt-5.col-lg-9.m-auto
      img(src="@/assets/curso/tema1/1.svg")

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1  Metodología: ¿en qué parte de la planeación curricular se realiza la guía de aprendizaje?

    p(data-aos="fade-up") Para la elaboración de una guía de aprendizaje es importante tener plenamente identificado el momento metodológico en el cual se encuentra el instructor, de acuerdo con lo que se presenta en la siguiente figura.

    .col-lg-10.m-auto
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 1.] Metodología de la Planeación Curricular – SENA
      figure
        img(src="@/assets/curso/tema1/2.svg" data-aos="fade-up")
      figcaption(style="background-color:#DCEBEF;font-weight:400;") Nota: Tomada de Sistema Compromiso (SENA, 2021).

    .bloque-texto-g.color-secundario.p-5.col-lg-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Recuerde que el procedimiento de desarrollo curricular tiene dos instrumentos: el programa de formación y el proyecto formativo, es decir que la guía de aprendizaje parte de estos instrumentos iniciales.

    .row.mt-5
      .col-lg-8
        p(data-aos="fade-right") Ahora, se invita a profundizar en la estructura que debe tener la guía de tal manera que permita alcanzar la propuesta antropológica de cada programa de formación que se oferta, dando cumplimiento al perfil de egreso planteado para atender las necesidades de la sociedad colombiana de acuerdo con los documentos institucionales:
      .col-lg-4
        ul.lista-ul(data-aos="fade-left")
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFB600;")
            |  Proyecto Educativo Institucional SENA.
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFB600;")
            |  Modelo Pedagógico SENA, el Programa Formativo.
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFB600;")
            |  Sistema de Evaluación de los Aprendices.

    Separador
    .titulo-segundo.mt-5
      h2#t_1_2 1.2  Estructura: ¿cuál es la secuencia didáctica de la guía de aprendizaje?

    p(data-aos="fade-up") Para el SENA la secuencia didáctica es un proceso lógico de las actividades que buscan responder a la pregunta: #[strong(style="background-color:#FFDB80;") ¿cómo proceder en cada momento instruccional?] para alcanzar el desarrollo de las habilidades; así, es importante identificar los momentos como se indica en la figura 2.

    .col-lg-10.m-auto.mt-5
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 2.] Secuencia didáctica de la guía de aprendizaje
      figure
        img(src="@/assets/curso/tema1/4.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") A continuación, se explican cada uno de los momentos de la secuencia didáctica de la guía de aprendizaje, a partir del documento de Guía de desarrollo curricular GFPI-G-12 y una reflexión pedagógica en torno al modelo pedagógico del SENA y los nuevos elementos del Decreto 1330 de 2019.

    .row.mt-5
      .col-lg-7
         ul.lista-ul
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Antes de aprender:] se desarrolla el proceso de anticipar y sensibilizar que busca, a partir de los conocimientos previos de los aprendices, acercarse a sus intereses y deseos de aprendizaje en la competencia, el equipo de instructores debe, entonces, generar alrededor de este planteamiento (actividades de reflexión inicial) todas las situaciones, problemas o retos que los aprendices deben resolver, dándoles la oportunidad de participar, a partir de sus conocimientos, sus experiencias e intereses, logrando que formen nuevos “conceptos” que ampliarán y desarrollarán a lo largo de la guía de aprendizaje.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Mientras aprendo:] se desarrolla el proceso cognitivo de reconocer y apropiar que permite al aprendiz relacionar a través de los contextos de las situaciones planteadas por el equipo de instructores y con actividades de reconocimiento y apropiación, de esta manera, los aprendices reflexionan sobre los diferentes y nuevos conceptos según la competencia que están aprendiendo.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Después de aprender:] este momento de la secuencia didáctica permite investigar y ensayar en los contextos reales o simulados en los que se desarrollan las situaciones planteadas, generando en los aprendices un pensamiento sistémico, resolución de problemas y pensamiento crítico que les permite detallar los procesos, procedimientos y habilidades que esperan alcanzar, lo anterior a través de las diversas actividades de creatividad e innovación (hacer) en su formación integral.
          li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
            p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; #[strong(style="background-color:#FFDB80;") Evaluación:] este es el proceso final de la secuencia didáctica, es el primero que se le presenta a los aprendices, porque es el momento donde se dan cuenta de cuáles son los Resultados del Aprendizaje que se espera alcancen a través de diversas actividades de transferencia que les proponen los instructores para lograr el aprendizaje significativo y autónomo de su propio conocimiento y la competencia planeada por alcanzar.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-left")

    Separador
    .titulo-segundo.mt-5
      h2#t_1_3 1.3  ¿Cómo se elabora una guía de aprendizaje?

    p(data-aos="fade-up") Como se planteó en la secuencia didáctica, la guía de aprendizaje SENA busca brindar a los aprendices una formación activa a través del enfoque constructivista y significativo, por ello, su diseño brinda estrategias para el trabajo colaborativo, creativo e innovador como pilares esenciales de la investigación en el logro de los resultados de aprendizaje y la competencia propuesta por alcanzar.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gxiuDA8e02s" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(data-aos="fade-up") Cabe recordar que la guía de aprendizaje es la didáctica holística principal de la planeación y el desarrollo curricular en el SENA, pues permite generar estrategias en torno al conocimiento, proponiendo actividades desde lo general a lo particular, para ampliar este proceso se presenta la siguiente figura.

    .col-lg-10.m-auto.mt-5
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 3.] Momentos para la elaboración de la guía de aprendizaje
      figure
        img(src="@/assets/curso/tema1/6.svg" data-aos="fade-up")

    p.mb-0.mt-5(data-aos="fade-up" style="color:#FF8D3B;") #[strong Primer momento:] #[strong(style="background-color:#FFDB80;color:#12263F;") antes de aprender]
    p(data-aos="fade-up") En este primer momento para la elaboración de la guía de aprendizaje se deben considerar tres aspectos, a saber:

    .row.mt-5.col-lg-10.m-auto
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema1/7.svg" data-aos="fade-right" style="max-width:350px;")
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema1/8.svg" data-aos="fade-up" style="max-width:350px;")
      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/tema1/9.svg" data-aos="fade-left" style="max-width:350px;")

    ul.lista-ul.mt-5
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; Inicia con una #[strong(style="background-color:#FFDB80;") reflexión inicial] donde se plantea la necesidad de movilizar la empatía por los conocimientos en su área, fomentar la curiosidad, la importancia del trabajo cooperativo y la colaboración entre instructores y aprendices para propiciar situaciones de creatividad e innovación, en coherencia con el aprendizaje basado en proyectos, que impulsa la indagación y la investigación desde el enfoque constructivista, logrando el pensamiento crítico y la resolución de problemas.
      li.pb-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; Se plantea una #[strong(style="background-color:#FFDB80;") situación problémica] a partir de los conocimientos previos de los aprendices en el marco del proyecto formativo, este planteamiento debe estar apoyado por datos y hechos que motiven el desarrollo de la guía, además de complementar con antecedentes sobre ¿por qué se presentó la situación?, y a la vez sea el hilo conductor de las actividades propuestas para evidenciar los resultados de aprendizaje. Esta situación problémica debe permitir la acción, la exploración, la sistematización, la confrontación, el debate, la evaluación, la autoevaluación y la heteroevaluación, su elaboración se debe elaborar a partir de los Resultados de Aprendizaje propuestos.

    .col-lg-10.m-auto.mt-5
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 4.] Situación problémica
      figure
        img(src="@/assets/curso/tema1/10.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Se recomienda a los instructores que, al elaborar este primer momento, tengan en cuenta las referencias bibliográficas de artículos, revistas, manuales indexados de investigación que permitan a los aprendices ampliar sus conocimientos previos para interactuar con el instructor en el momento de la reflexión.

    ul.lista-ul.mt-4
      li.pb-3.pt-3(data.aos="fade-up" style="border-bottom:1px #AFAFAF solid;border-top:1px #AFAFAF solid;")
        p.mb-0 #[i.fas.fa-check(style="color: white;background-color: #FF6B00;padding: 0.3rem .4rem;")] &nbsp; Posteriormente, se #[strong(style="background-color:#FFDB80;") plantea la contextualización e identificación de conocimientos] que son consecuencia (resultado) de la situación problémica dando inicio al aprendizaje significativo, lo que el aprendiz ya sabe y lo que debe aprender en el contexto del programa de formación. Las actividades de contextualización permiten comprobar los saberes de los aprendices, la comprensión de conceptos y procedimientos. Cuando el instructor recoge y concluye, los aprendices tendrán la posibilidad de comparar conceptos y procedimientos formales con conocimientos que ya tenía y su validez. Se puede implementar con los métodos de preguntas, lluvia de ideas, socialización de experiencias, intercambio de métodos, formular preguntas con respecto a la situación planteada, imágenes, videos, lectura de texto y formas de hacer las cosas, actividades de observación, entre otras.

    p.mb-0.mt-5(data-aos="fade-up" style="color:#FF8D3B;") #[strong Segundo momento] #[strong(style="background-color:#FFDB80;color:#12263F;") Mientras aprendo]
    p(data-aos="fade-up") En este primer momento para la elaboración de la guía de aprendizaje se deben considerar tres aspectos, a saber:

    p.mt-4(data-aos="fade-up") En este segundo momento, en la guía de aprendizaje se deben presentar subactividades (tareas puntuales) denominadas ciclo del aprendizaje, para lo que se usan diversas estrategias abarcando los diferentes tipos de pensamiento de los aprendices con acciones cognitivas, procedimentales, actitudinales, que se desarrollarán a lo largo de contexto en cualquier actividad.

    .col-lg-10.m-auto.mt-5
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 5.] Ciclo de aprendizaje
      figure
        img(src="@/assets/curso/tema1/11.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Para lograr el desarrollo de las #[strong(style="background-color:#FFDB80;color:#12263F;") actividades de reconocimiento] y apropiación es necesario desplegar #[strong(style="color:#A757F7 !important;") funciones cognitivas], entre otras:

    figure.mt-5
      img(src="@/assets/curso/tema1/12.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") Por lo tanto, se sugieren algunas #[strong estrategias cognitivas] que pueden ser utilizadas como:

    .row.mt-4(style="background-color:#FFF1E7;")
      .col-lg-3.p-4
        ul.lista-ul
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Mentefactos.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Redes conceptuales.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Ideogramas.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Líneas de tiempo.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Diagramas causa-efecto.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Pregunta problémica.
      .col-lg-3.p-4
        ul.lista-ul
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Analogías.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Apareamientos.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Conversatorios.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Elaboración de preconceptos.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Estudios de casos.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Juego de roles.
      .col-lg-3.p-4
        ul.lista-ul
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Demostraciones.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Cruz categorial.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Mapas mentales.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Uve heurística.
          li(data.aos="fade-up" style="")
            p.mb-0 #[i.fas.fa-check(style="color: #FF6B00;")] &nbsp; Visita técnica.

      .col-lg-3(style="place-self:center")
        figure
          img(src="@/assets/curso/tema1/13.svg" data-aos="fade-left")

    .bloque-texto-g.color-secundario.p-4.col-lg-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/14.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[strong(style="background-color:#FFDB80;color:#12263F;") Con respecto a las visitas técnicas], estas deben tener claramente identificado #[strong(style="color:#FF8D3B !important;") el objetivo de la visita] y los #[strong(style="color:#FF8D3B !important;") aspectos más importantes] en los que el aprendiz debe concentrarse, los elementos de seguridad para el desarrollo de las actividades; así mismo, elaborar #[strong(style="color:#FF8D3B !important;") preguntas orientadoras] que permitan la realización del #[strong(style="color:#FF8D3B !important;") informe] que debe el tener formato y los puntos específicos del contenido que será entregado.

    p.mb-0.mt-5(data-aos="fade-up" style="color:#FF8D3B;") #[strong Tercer momento] #[strong(style="background-color:#FFDB80;color:#12263F;") Despúes de aprender]

    .row.mt-4
      .col-lg-7
        p(data-aos="fade-up") Para este momento del desarrollo de la guía, se pretende que los aprendices realicen la #[strong(style="background-color:#FFDB80;color:#12263F;") transferencia de conocimientos], que apliquen el conocimiento abordado sobre conceptos, procedimientos y valores que han adquirido en contextos reales o simulados de acuerdo con la situación planteada y presentando las evidencias que se lograron en los resultados de aprendizaje.
        p(data-aos="fade-up") Las actividades de #[strong(style="background-color:#FFDB80;color:#12263F;") transferencia de conocimientos] no se encuentran explícitas en la planeación pedagógica, deben ser diseñadas por los instructores de manera que permitan evaluar al aprendiz a través del desarrollo de las habilidades aprendidas en situaciones de tipo concreto o práctico, acercar al aprendiz a escenarios de contextos reales, modelado de situaciones, solución de problemas, uso de sus habilidades en acciones productivas. 
        p(data-aos="fade-up") El desarrollo de las #[strong(style="background-color:#FFDB80;color:#12263F;") actividades de transferencia de conocimientos] se encuentra en la fase de apropiación y la fase de contexto real de la vida, pueden ser situaciones resueltas por el instructor previamente a los que se les cambia las condiciones iniciales y el aprendiz debe resolver, talleres, prácticas de campo, acciones de diseño, creación, innovación, propuestas de nuevos procesos o procedimientos, soluciones de problemas, solución de hipótesis, planes de gestión, planes de negocio, procesos de investigación, entre otras.

      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/15.svg" data-aos="fade-left")

    p.mt-4(data-aos="fade-up") Para el desarrollo de las #[strong(style="background-color:#FFDB80;color:#12263F;") actividades de transferencia de conocimientos] de carácter práctico, es necesario que a los aprendices se les dote de elementos o materiales a través de los cuales puedan hacer propuestas de innovaciones tecnológicas, por ejemplo, artículos de revistas especializadas, datos de informes de investigación o darles la ruta para que los encuentren. Se recomienda dar las instrucciones o un referente al que se puedan remitir para llevar a cabo la socialización. Además, es necesario explicar a los aprendices cuáles serán los aspectos a tener en cuenta para la evaluación. Algunas #[strong(style="background-color:#FFDB80;color:#12263F;") actividades de transferencia de conocimientos] pueden ser: Talleres, prácticas de campo, resultados de desempeño, investigación-acción, profundización del conocimiento, crear, innovar, inventar, formular y solucionar hipótesis solución de problemas.
    p.mt-3(data-aos="fade-up") En este tercer momento, es importante tener en cuenta la evaluación que el SENA la considera como un proceso de aprendizaje y seguimiento continuo, a esta se le denomina evaluación formativa o valoración integral y se enfoca en el desempeño del aprendiz (su esfuerzo, su interés, su nivel de comprensión, las estrategias que usa para aprender), se valoran evidencias de conocimiento (saber), desempeño (hacer) o producto (es tangible), este proceso también permite mejor las estrategias de enseñanza aprendizaje.

    figure.mt-5
      img(src="@/assets/curso/tema1/16.svg" data-aos="fade-up")

    p.mt-4(data-aos="fade-up") Desde la #[strong(style="background-color:#FFDB80;color:#12263F;") evaluación formativa] por competencias es importante que los aprendices reciban la instrucción de cómo serán evaluados, en cuanto a forma, contenido, lugar, tiempo estimado de entrega para realizar el #[span(style="color:#FF6B00;") producto] esperado de los #[strong(style="color:#5A189A !important;") Resultados de Aprendizaje] propuestos; es decir cuál es el procedimiento y a través de qué #[span(style="color:#FF6B00;") evidencias de aprendizaje] que deberán estar acordes con las competencias formuladas en la guía; así mismo, si para desarrollar el producto se hace necesario de insumos como textos, manuales, videos, imágenes, etc., indicar de manera explícita dónde se encuentran o anexar los formatos (listas de chequeo, formatos, matrices, modelos de identificación de riesgos, manuales) que se requieran como anexos a la guía. Finalmente, es importante recordar que cada actividad debe generar una #[strong(style="background-color:#FFDB80;color:#12263F;") evidencia parcial o total] del Resultado de Aprendizaje, ejemplo: exposiciones donde se formulan preguntas abiertas que evidencien la comprensión de los conceptos con la respectiva retroalimentación del Instructor.

    .mt-5
      p.p-1(style="border-left:5px #FFB600 solid;") &nbsp;&nbsp; #[strong Figura 6.] Evaluación formativa
      figure
        img(src="@/assets/curso/tema1/17.svg" data-aos="fade-up")

    .bloque-texto-g.color-secundario.p-4.col-lg-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/18.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0(data-aos="fade-up") Es importante explicar claramente a los aprendices el proceso de evaluación formativa en el SENA, el cual inicialmente es un diagnóstico, posteriormente es formativo durante los momentos, ya que permite #[strong #[em cualificar y reorientar]]; la evaluación sumativa permite valorar el resultado final del aprendizaje y evidencia el desarrollo de #[strong(style="background-color:#FFDB80;color:#12263F;") competencias.]

    p.mt-4(data-aos="fade-up") A continuación, se pueden revisar las recomendaciones finales para la estructuración de la guía de aprendizaje SENA.

    .col-md-5.mt-5.m-auto(data-aos="fade-up")
      .p-4.row(style="background: rgb(246,244,254);background: linear-gradient(59deg, rgba(246,244,254,1) 0%, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 0%, rgba(255,237,193,1) 4%, rgba(255,233,178,1) 6%, rgba(255,217,123,1) 10%, rgba(255,198,55,1) 16%, rgba(255,198,55,1) 16%, rgba(255,182,0,1) 21%, rgba(255,182,0,1) 25%);border-radius:15px;")
        .col-3(style="place-self:center")
          figure
            img(src="@/assets/curso/tema1/19.svg" data-aos="fade-right" style="max-width:80px")
        .col-6(style="place-self:center")
          h5.text-center Recomendaciones finales
        .col-3(style="place-self:center")
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/OKEst_DI_CF5_1-4_Recomendaciones finales.pptx')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


  
</template>

<script>
export default {
  name: 'Tema1',
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
</style>
