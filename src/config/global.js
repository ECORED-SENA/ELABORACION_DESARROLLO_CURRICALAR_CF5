export default {
  global: {
    componenteFormativo: 'Guía de aprendizaje y material didáctico',
    descripcionCurso:
      'A través del desarrollo de este componente adquirirá elementos conceptuales y prácticos que le permitirán la elaboración de guías de aprendizaje en el marco del procedimiento de desarrollo curricular SENA.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición: ¿qué es una guía de aprendizaje?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Metodología: ¿en qué parte de la planeación curricular se realiza la guía de aprendizaje?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Estructura: ¿cuál es la secuencia didáctica de la guía de aprendizaje?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿Cómo se elabora una guía de aprendizaje?',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recursos educativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de recursos educativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas para la elaboración de recursos educativos',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blázquez, F., y Lucero, M. (2002). Los medios y recursos en el proceso didáctico. En Medina, A., y Salvador, F. Didáctica general (pp. 185- 218). Pearson Educación. ',
      link: '',
    },
    {
      referencia:
        'Moya, J. S. (2010). Construccionismo, conocimiento y realidad: una lectura crítica desde la Psicología Social. Revista Mad, (23), 31-37. ',
      link: '',
    },
    {
      referencia: 'SENA. (2020). Guía de desarrollo curricular. SENA. ',
      link: 'downloads/GFPI-G-012_Guia_Desarrollo_Curricular.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Decreto 1330. Por el cual se sustituye el Capítulo 2 y se suprime el Capítulo 7 del Título 3 de la Parte 5 del Libro 2 del Decreto 1075 de 2015 -Único Reglamentario del Sector Educación. ',
      link:
        'https://www.mineducacion.gov.co/normatividad/1753/w3-article-387348.html',
    },
    {
      referencia:
        'Universidad Distrital Francisco José de Caldas. (s. f.). Recursos educativos digitales. Proyecto Académico Educación en Tecnología. Universidad Distrital Francisco José de Caldas. ',
      link:
        'http://www1.udistrital.edu.co:8080/es/web/proyecto-academico-educacion-en-tecnologia/recursos-educativos-digitales',
    },
    {
      referencia:
        'Vargas, M., G. (2017). Recursos educativos didácticos en el proceso enseñanza aprendizaje. Cuadernos Hospital de Clínicas, 58(1), 68-74. ',
      link:
        'http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S1652-67762017000100011&lng=es&tlng=es',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizajes previos',
      significado:
        'logros anteriores obtenidos por el aprendiz a través de procesos formativos o experiencias personales y que son reconocidos por el instructor para avanzar en su programa de formación, sin repetir aprendizajes.',
    },
    {
      termino: 'Evidencias de aprendizaje',
      significado:
        'pruebas manifiestas del aprendizaje recobradas directamente en el proceso de formación. Son recolectadas con la orientación de instructor utilizando métodos, técnicas e instrumentos de evaluación seleccionados, según sean evidencias de conocimiento, de desempeño (de proceso y producto), permitiendo reconocer los logros obtenidos por el aprendiz en términos del saber, saber hacer y del ser.',
    },
    {
      termino: 'Desarrollo curricular',
      significado:
        'procedimiento mediante el cual se planea, diseña y ejecuta la ruta de aprendizaje de cada aprendiz, mediante proyectos formativos, planeación pedagógica; que contienen actividades de aprendizaje, y aplicación de técnicas didácticas activas que permiten desarrollar sus competencias con ritmos de aprendizaje personalizados.',
    },
    {
      termino: 'Instrumentos de evaluación',
      significado:
        'conjunto de herramientas utilizadas por el instructor para recoger datos relacionados con los resultados de aprendizaje y criterios de evaluación definidas en el diseño curricular del programa de formación. Con el fin de ser utilizada con más eficacia, cada herramienta es apropiada según las fuentes de información requeridas.',
    },
    {
      termino: 'Recursos educativos',
      significado:
        'los recursos educativos didácticos son el apoyo pedagógico que refuerza la actuación del docente, optimizando el proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Recursos educativos digitales',
      significado:
        'materiales compuestos por medios digitales y producidos con una intencionalidad educativa que buscan el logro de un objetivo de aprendizaje y que responden a unas características didácticas apropiadas para el aprendizaje',
    },
  ],
  complementario: [
    {
      texto: 'SENA. (2020). Guía de desarrollo curricular',
      tipo: 'Documento',
      link: 'downloads/GFPI-G-012_Guia_Desarrollo_Curricular.pdf',
    },
    {
      texto: 'Sistema de Bibliotecas SENA.',
      tipo: 'Página <em>web</em> repositorio',
      link: 'https://repositorio.sena.edu.co/',
    },
    {
      texto:
        'Universidad de los Andes. Repositorio de recursos digitales abiertos. ',
      tipo: 'Página <em>web</em> repositorio',
      link:
        'https://conectate.uniandes.edu.co/index.php/recursos/repositorios-de-recursos-educativos-abiertos',
    },
    {
      texto: 'Repositorio de contenidos educativos abiertos. ',
      tipo: 'Página <em>web</em> repositorio',
      link: 'https://bit.ly/3APRY2W',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Instructora experta temática',
        centro: 'Centro de Desarrollo Tecnológico Industrial Valle',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesus Perez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
