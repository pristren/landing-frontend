import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "./components/ui/button";
import logo from "./assets/img/image.png";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <>
      <nav className="bg-[#bd6260] py-4 sticky top-0 z-[999] text-white">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="flex items-center space-x-4">
            <Link to={"/"}>
              <img src={logo} className="w-16 h-16" />
            </Link>
          </div>
          <div className="hidden md:flex items-center text-center ">
            <a className=" border-r-2 px-3 " href="#">
              Funcionalidad
            </a>
            <a className=" border-r-2 px-3 " href="#price">
              Precios
            </a>
            <a className=" border-r-2 px-3 " href="#faq">
              ¿En qué podemos ayudar?
            </a>
            <a className=" border-r-2 px-3 " href="#contact">
              Conócenos
            </a>
          </div>
          <div className="flex items-center space-x-3">
            {/* <p className="  underline ">Español</p> */}
            <DropdownMenu className="">
              <DropdownMenuTrigger className="underline flex">
                Español
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!z-[99999]" align="end">
                <DropdownMenuItem className="">Español</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className="bg-blue-600 hover:bg-blue-600 hover:text-white  text-white  "
              // variant="outline"
            >
              {" "}
              Inicia sesión 2
            </Button>
          </div>
        </div>
      </nav>
      <section className="py-8 px-[8%] lg:px-[20%] text-[#777d8a] ">
        {/* title  */}
        <div className="text-center space-y-1">
          <h5 className="font-medium text-[#4181f9]">
            Última actualización: 19 de enero de 2023
          </h5>
          <h3 className="text-3xl font-semibold text-black">
            Aviso legal. Política de privacidad, términos y condiciones.
          </h3>
        </div>

        {/* text  */}
        <p className="text-[#777d8a] mt-10">
          Happy Vecinos S.L. con CIF B02791382 es una empresa de administración
          de la propiedad. La dirección electrónica del web o servicio internet
          de Happy Vecinos es:{" "}
          <span className="underline">
            http://www.<span className="underline">happyvecinos.com</span>
          </span>{" "}
          siendo su dirección electrónica en Internet 23.236.62.147, cuyo
          contenido es propiedad de Happy Vecinos por lo que la copia, uso,
          reproducción, distribución o cualquier tipo de comunicación de la
          información contenida en este web deberá ser autorizada por escrito
          por Happy Vecinos. A efectos del cumplimiento normativo del artículo
          10 de la LSSI, ponemos a disposición de nuestros clientes y órganos
          competentes la dirección de correo{" "}
          <span className="underline">
            info@<span className="underline">happyvecinos.com</span>
          </span>
          , si bien la atención de cualquier duda, incidencia o solicitud de
          información a nuestros clientes será realizada desde nuestro servicio
          telefónico +34 919015088. Happy Vecinos se reserva todos los derechos
          para modificar, limitar o cancelar el acceso y contenidos del web en
          cualquier momento, no asumiendo responsabilidad alguna sobre su
          actualización. Asimismo, Happy Vecinos se reserva la facultad de
          efectuar modificaciones en la configuración o presentación de su web,
          pudiendo hacer uso de tal facultad en cualquier momento y sin previo
          aviso. Tanto el acceso a la web de Happy Vecinos como el uso de
          cualquier información contenida en el mismo es de exclusiva
          responsabilidad de la persona que accede o lo usa, no respondiendo
          Happy Vecinos de ninguna consecuencia, daño o perjuicio que pudiera
          derivarse del acceso o uso de la información. Happy Vecinos no
          garantiza que la información, texto, gráficos, vínculos o cualquier
          otro contenido de su web sean exactos o completos, excluyendo,
          especialmente, cualquier responsabilidad que pudiera derivarse de los
          contenidos y servicios comerciales o de otra índole de webs que se
          puedan enlazar electrónicamente (link), directa o indirectamente, a
          través del web de Happy Vecinos. <br />
          <br />
          En caso de haberse otorgado consentimiento para la recepción de
          comunicaciones comerciales, la revocación de dicho consentimiento
          podrá realizarse mediante escrito dirigido a la Av. Pla del Vinyet
          111, Sant Cugat del Valles, 08172 Barcelona, a la atención de Happy
          Vecinos S.L.. El hecho de que en el web de Happy Vecinos se haga
          referencia a productos, servicios, marcas, nombres comerciales,
          fabricantes suministradores, etc., propiedad de terceros no constituye
          patrocinio o recomendación de los mismos por parte de Happy Vecinos.
          Happy Vecinos excluye y declina cualquier responsabilidad que pudiera
          derivarse de la transmisión de información entre usuarios a través de
          la red Internet o redes equivalentes y no adquiere ninguna
          responsabilidad por causa de problemas técnicos o fallos mecánicos en
          los equipos informáticos producidos durante la conexión a la red
          Internet o redes equivalentes, ya sea a través de la web de Happy
          Vecinos o de webs de terceros. <br />{" "}
          <span className="underline">happyvecinos.com</span>, responsable del
          tratamiento, es una empresa regida por las leyes españolas, tiene su
          domicilio social en Av. Pla del Vinyet 111, Sant Cugat del Valles
          08172 Barcelona y es titular del CIF B02791382.
          {/* <a className="text-[#4181f9]" href="www.holded.com">
            www.holded.com
          </a>{" "}
          propiedad de{" "}
          <span className="font-medium text-black">
            HOLDED TECHNOLOGIES S.L.
          </span> */}
        </p>

        <p className="text-black mt-8">INTRODUCCIÓN</p>

        <p className="text-[#777d8a] mt-10">
          En caso de que un Usuario contacte a Happy Vecinos a través del
          apartado “Contacto” de la Web, los datos vertidos únicamente serán
          tratados para poder contestar a dicha comunicación. Si, además, el
          Usuario ha dado su consentimiento expreso de que desea recibir
          información de carácter comercial de Happy Vecinos, sus datos serán
          almacenados y tratados para esta finalidad. La información nunca será
          tratada con una finalidad distinta para la que fue recabada. En todo
          caso, el Usuario podrá acceder a los datos que Happy Vecinos tiene
          sobre él, verificar que no son erróneos y, de ser necesario,
          corregirlos en cualquier momento. Asimismo, el Usuario, en calidad de
          interesado, puede oponerse al tratamiento de sus datos personales y
          requerir su cancelación. Para solicitar el ejercicio de estos
          derechos, entre otros que se mencionarán más adelante, puede enviar a
          Happy Vecinos un email a{" "}
          <span className="underline">
            info@<span className="underline">happyvecinos.com</span>
          </span>{" "}
          o enviarnos un escrito al domicilio social. También puede contactarnos
          por teléfono al +34 919015088. Si el Usuario ha consentido
          expresamente la recepción de información comercial de Happy Vecinos,
          en cualquier momento puede dar de baja la suscripción a este tipo de
          comunicaciones, sin ningún tipo de coste, enviando un email a{" "}
          <span className="underline">
            info@<span className="underline">happyvecinos.com</span>
          </span>{" "}
          o pulsando en el hipervínculo “Darte de baja de comunicaciones de
          carácter comercial” en los emails con contenido comercial. <br />
          Happy Vecinos no vende, transfiere, cede o pone a disposición de
          terceros los datos de los Usuarios sin su consentimiento expreso
          previo. Cuando el Usuario facilita su información de carácter personal
          a Happy Vecinos, está autorizando a que dicha información sea tratada
          conforme a la presente Política de privacidad. En caso de que no
          quiera que su información sea tratada de acuerdo con la misma, no
          envíe sus datos.
        </p>
        <p className="text-black mt-4">I. RESPONSABLE</p>

        <p className="text-[#777d8a] mt-5">
          Happy Vecinos S.L. con domicilio social en Av. Pla del Vinyet 111,
          Sant Cugat del Valles 08172 Barcelona y CIF B02791382 e inscrita en el
          Registro Mercantil de Barcelona en el Tomo 47547 Folio 149 Hoja 555237
          Inscripción 1 (en adelante “Happy Vecinos”) es la entidad responsable
          del tratamiento de los datos recogidos por{" "}
          <span className="underline">happyvecinos.com</span> en el marco de los
          servicios prestados a través de la presente web, www.
          <span className="underline">happyvecinos.com</span> (en adelante la
          “Web”).
        </p>
        <p className="text-black mt-4">II. DATOS RECOPILADOS</p>

        <p className="text-[#777d8a] mt-5">
          Para poder prestar los servicios que se ofrecen desde la Web, Happy
          Vecinos podrá recopilar y almacenar de los usuarios de la Web (en
          adelante, los “Usuarios”) la siguiente información personal: Nombre,
          dirección de correo electrónico, domicilio, teléfono, fecha de
          nacimiento y, dependiendo del servicio utilizado, datos financieros,
          como el número de tarjeta de crédito o cuenta bancaria; Discusiones,
          conversaciones, disputas y correspondencia realizada por el Usuario a
          través de los sitios Web de Happy Vecinos o a través de cualesquiera
          canales habilitados a tal efecto; La dirección del protocolo de
          Internet (IP) del dispositivo que usa el Usuario, el programa de
          navegación utilizado, su sistema operativo, la fecha y hora del
          acceso, la dirección de Internet de la Web por la que accede el
          Usuario y también información sobre cómo utiliza la Web; Información
          adicional que desee aportar el Usuario y/o copia de determinados
          documentos para verificar la identidad de sus Usuarios;
        </p>

        <p className="text-black mt-4">III. FINALIDAD DEL TRATAMIENTO</p>

        <p className="text-[#777d8a] mt-5">
          Happy Vecinos tratará los datos de carácter personal recabados con los
          siguientes fines: Atender y gestionar adecuadamente las consultas,
          comentarios, incidencias o sugerencias remitidas; Gestionar las tareas
          de la contratación de los productos y servicios ofertados en la
          presente Web; Mantener al Usuario informado, bien por medios
          electrónicos o telefónicos, bien por cualquier otro medio que así se
          haya previsto y facilitado, de ofertas, oportunidades de servicios,
          eventos o análogos, incluso una vez terminada la relación; Gestionar
          las tareas de la contratación de los productos y servicios ofertados
          en la presente Web; Análisis estadísticos de visitas a la Web y
          comportamientos de los Usuarios en la misma; Tratamiento posterior de
          los datos con fines estadísticos; Llevar a cabo las gestiones
          necesarias para adecuar su participación en procesos de selección de
          personal ofertados por Happy Vecinos; Prevenir abusos y fraudes en el
          uso de nuestros servicios; Cesión de datos a organismos y autoridades
          públicas, siempre y cuando sean requeridos de conformidad con las
          disposiciones legales y reglamentarias. FINALIDAD DEL TRATAMIENTO PARA
          USUARIOS REGISTRADOS
          <span className="underline uppercase">
            HTTPS://MI.happyvecinos.com
          </span>{" "}
          Se autoriza al tratamiento datos personales del propietario de la
          Comunidad de Propietarios
        </p>

        <>
          <p className="text-black mt-8">HAutorizo a:</p>
          <p className="text-[#777d8a] mt-5">
            I. Happy Vecinos S.L., con NIF B02791382, y con domicilio a efecto
            de notificaciones en Av. Pla del Vinyet 111 Sant Cugat del Vallès,
            quien actúa como Responsable del Tratamiento de datos personales,
            para que en los términos legalmente establecidos realice la
            recolección, almacenamiento, uso, circulación, supresión y en
            general, el tratamiento de mis datos personales que he procedido a
            entregar o que entregaré, tal y como se dispone en la Ley Orgánica
            3/2018, de 5 de diciembre, de Protección de Datos Personales y
            garantía de los derechos digitales (LOPDGDD) y el Reglamento (UE)
            2016/679, general de protección de datos (RGPD). En este sentido,
            afirmo que he sido informado que el uso de mis datos personales
            tiene la siguiente finalidad: Para realización de cualquier trámite
            inherente a la administración de la Comunidad de Propietarios. A tal
            fin consiento y autorizo expresamente para la remisión de
            comunicaciones comerciales, ofertas, propuestas y ventajas
            promocionales indicadas por cualquier medio, incluido por medios
            electrónicos (teléfono, correo electrónico o medio equivalente).
          </p>
          <p className="text-[#777d8a] mt-5">
            II. Asimismo, se informa que los datos personales pueden ser
            transferidos y tratados por terceras personas con las que se firme
            un acuerdo de colaboración. Con la firma de la presente
            autorización, consiento expresamente para el caso de que mis datos
            personales sean cedidos a terceras personas.
          </p>
          <p className="text-[#777d8a] mt-5">
            III. Del mismo modo, siempre que así se estime, el interesado podrá
            ejercitar su derecho de acceso, rectificación, cancelación,
            oposición o portabilidad relativo a este tratamiento, dirigiéndose
            siempre por escrito al siguiente correo electrónico:
            <span className="underline">
              info@<span className="underline">happyvecinos.com</span>
            </span>
          </p>
          <p className="text-[#777d8a] mt-5">
            IV. Los datos personales serán guardados mientras se mantenga la
            vinculación con el responsable. Al finalizar los mismos, los datos
            personales tratados en cada una de las finalidades indicadas, se
            mantendrán durante los plazos legalmente previstos. Cuando los datos
            de carácter personal hayan dejado de ser necesarios para el
            cumplimiento de las finalidades previstas y las disposiciones
            legales aplicables, serán cancelados. Orden domiciliación adeudos
            directos SEPA. Se permite la domiciliación de adeudos y autorizo a
            la Comunidad de Propietarios a enviar instrucciones a la entidad
            bancaria para adeudar la cuenta indicada y a la entidad para
            efectuar los adeudos en su cuenta siguiendo las instrucciones de la
            Comunidad de Propietarios. Modalidad Tipo de pago Recurrente.
          </p>
          <br></br> <br />
          Notificaciones. Apruebo el uso de medios tecnológicos de comunicación
          y solicito expresamente que las comunicaciones de cualquier índole con
          y para la Comunidad de Propietarios reseñada se realicen en el correo
          electrónico designado en el presente documento. No obstante, acepto
          como medio las comunicaciones publicadas en el tablón de anuncios
          digital (noticias) del área privada de usuario del sitio
          <span className="underline">https://mi.happyvecinos.com</span>{" "}
          Asistencia y votación a distancia a la junta. Acepto adoptar:
          <br />
          <br />
          {/* <br /> */}
          I) El uso de la videoconferencia o por otros medios telemáticos de
          comunicación sincrónica similares en las juntas de propietarios y la
          posibilidad de la grabación de estas, recogiendo si cabe el contenido
          de todo lo aprobado en junta en un documento de archivo electrónico de
          custodia. Acepto poder delegar por videoconferencia la participación
          en uno de los propietarios asistentes y cederle la asistencia y voto
          para desconectar después y dejar al representante. También poder
          delegar el voto enviando al administrador de fincas, antes de que
          comience la junta, el impreso de delegación rellenado con mis datos y
          de la persona a quien delego, así como su correo electrónico.
          <br />
          <br />
          II) El uso del voto telemático asincrónico en dichas Juntas,
          garantizando debidamente la identidad del propietario en el área
          privada de usuario en
          <span className="underline">https://mi.happyvecinos.com</span> o
          análoga plataforma. Se considera válido el voto ejercitado por el
          propietario por medio de escrito con firma legitimada o por medio de
          votación telemática con firma electrónica simple. No obstante, acepto
          dichos medios aun sin legitimación de firma ni firma electrónica.
          <br />
          <br />
          III) La posibilidad de adoptar acuerdos sin reunión mediante la
          emisión de voto por correspondencia postal, telemática o cualquier
          otro medio de conformidad con lo dispuesto en el artículo 312-7 del
          Código Civil de Cataluña. Nota. Cada convocatoria recogerá el uso de
          la videoconferencia para permitir la asistencia a junta haciendo
          constar la metodología a seguir, concretamente se incluirá el sistema
          tecnológico que se utilizará para intervenir en la junta en fórmula no
          presencial. Aquellos propietarios que no disponen de medios para poder
          llevar a efecto la conexión, y no quisieren delegar el voto, pueden
          acudir al domicilio de otro propietario para estar presente en la
          conexión.
          <br />
          <br />
          <br />
          IV. PLAZO DE CONSERVACIÓN DE LOS DATOS <br />
          Happy Vecinos mantendrá los datos de carácter personal mientras exista
          una relación contractual y/o comercial con el Usuario. En caso de
          ejercer cualquier derecho que implique la eliminación total o parcial
          de éstos, mantendremos los datos debidamente bloqueados durante el
          período legal establecido en la normativa que fuera de aplicación, sin
          darle ningún uso.
          <br />
          <br />
          V. LEGITIMACIÓN <br /> La base legal para el tratamiento de los datos
          de los Usuarios con las finalidades antes señaladas radica en: La
          ejecución de un contrato en relación con la finalidad indicada en el
          apartado Términos y condiciones; El interés legítimo existente en
          transmitir datos personales entre los responsables del grupo
          empresarial del que forma parte Happy Vecinos con fines de
          mercadotecnia directa. El consentimiento expreso, específico,
          inequívoco, libre e informado del Usuario en relación con las materias
          indicadas en el apartado “Finalidad del tratamiento” que tengan que
          ver con finalidades comerciales o promocionales, de cesión a terceros
          (teniendo Happy Vecinos que solicitar el consentimiento expreso para
          cada cesión no legitimada) o cualesquiera otras que no se haya
          recabado inicialmente con el registro del Usuario; El interés legítimo
          de Happy Vecinos de acuerdo con la normativa de aplicación siempre que
          no prevalezcan los derechos e intereses de los Usuarios, se tenga en
          cuenta las expectativas razonables de éstos basadas en su relación con
          Happy Vecinos, y se haya analizado meticulosamente caso por caso desde
          Happy Vecinos ;
          <br />
          <br />
          VI. DESTINATARIOS <br /> No se comunicarán datos a terceros, salvo
          previa autorización mediante consentimiento expreso por el Usuario. No
          hay transferencias internacionales. Asimismo, los Usuarios que,
          conforme a las Términos y condiciones, sean considerados Usuarios
          Miembros de una Comunidad y/o Usuarios espóradicos (no miembros de una
          Comunidad), y que se hayan puesto en contacto a través de
          <span className="underline">happyvecinos.com</span> con ocasión de
          contratar cualquier actividad con o para la propiedad se articula a
          través de la presente Web, aceptan que sus datos puedan ser accedidos
          respectivamente entre ellos para poder continuar con el servicio
          contratado. Los destinatarios de la información suministrada, se
          comprometen en la utilización de los datos facilitados, a respetar su
          confidencialidad y a utilizarlos de acuerdo a las finalidades
          previamente autorizadas.
          <br />
          <br />
          VII. ALOJAMIENTO DE LOS DATOS <br /> Todos los datos recopilados por
          <span className="underline">happyvecinos.com</span> están alojados en
          la Unión Europea, ya bien sea en sus servidores o en los de empresas
          de hosting con los que Happy Vecinos ha contratado dicho servicio,
          estando éstos últimos certificados por la ISO 27001.
          <br />
          <br />
          VIII. INFORMACIÓN SOBRE LAS VISITAS A LA WEB <br /> Happy Vecinos
          recaba la información facilitada por el Usuario de forma activa o por
          estar navegando en la Web de a efectos estadísticos y publicitarios,
          para controlar el uso de la Web y para mejorar el conocimiento sobre
          los intereses del Usuario. Esta información se utiliza por Happy
          Vecinos para saber el tiempo de carga de la presente Web, el
          porcentaje de rebote, idioma empleado, cómo se utiliza la Web, el
          número de visitas y el tipo de información que más se consulta por el
          Usuario. Esta información ayuda a identificar si Web funciona
          correctamente. De esta manera, si se detectasen fallos o errores en el
          funcionamiento, se procedería con soluciones y mejoras del rendimiento
          de la Web, para poder ofrecer un mejor servicio a todos los Usuarios.
          <br />
          <br />
          IX. MENORES DE EDAD <br /> Los Usuarios que envíen información
          personal a Happy Vecinos declaran que la información y los datos
          facilitados son exactos y veraces, así como que es mayor de 14 años.
          Asimismo, sólo estarán facultados para contratar servicios aquellos
          Usuarios registrados mayores de 18 años que dispongan de la capacidad
          legal necesaria.
          <br />
          <br />
          XI. MEDIDAS DE SEGURIDAD
          <br /> Happy Vecinos ha desplegado aquellas medidas que la Ley señala
          como necesarias para mantener los datos de los Usuarios libres de
          accesos no autorizados, evitar su revelación y, en su caso, su
          destrucción. En este sentido, se han articulado los siguientes
          mecanismos: Encriptamos todas las comunicaciones mediante el protocolo
          criptográfico SSL; La recopilación, almacenamiento y tratamiento de
          datos en el sistema quedan en todo caso salvaguardados frente a
          accesos no autorizados; Se restringe el acceso por empleados,
          proveedores de servicios y otras personas con las que Happy Vecinos
          puedan entablar relaciones contractuales, mediante permisos, acuerdos
          de confidencialidad, imposición de medidas de seguridad específicas y
          el compromiso de tener actualizadas las medidas de seguridad
          pertinentes conforme a la legislación vigente. Se deja expresa
          constancia de que Happy Vecinos ha adoptado todas las medidas
          necesarias para proteger la seguridad de sus redes. Por tanto,
          cualquier violación y/o ataque a ellas y, en consecuencia, a los
          programas asociados con Happy Vecinos, mediante los denominados
          “hackers”, constituirá un caso fortuito o fuerza mayor y eximirá a
          Happy Vecinos de responsabilidad por las consecuencias derivadas de
          tales hechos.
          <br />
          <br />
          X. COOKIES
          <br />
          Happy Vecinos utiliza “cookies” (pequeños archivos que se sitúan en el
          disco duro del Usuario) en algunas de sus páginas para ayudarse a
          analizar el uso que se hace de ellas, personalizar sus servicios,
          contenidos y anuncios publicitarios, cuantificar la eficacia de las
          promociones y fomentar el desarrollo de operaciones de manera segura y
          fiable. ¿Qué son las cookies? Una “cookie” es un pequeño archivo de
          datos que se descarga en el ordenador/smartphone/tablet del Usuario al
          acceder a determinadas páginas web, a fin de poder almacenar y
          recuperar información sobre la navegación que se efectúa desde dicho
          equipo. Estos ficheros se almacenan en el ordenador del Usuario, y
          contienen datos anónimos que no son perjudiciales para su equipo. Se
          utilizan para recordar las preferencias del Usuario,como el idioma
          seleccionado, datos de acceso o personalización de la página. Las
          cookies también pueden ser utilizadas para registrar información
          anónima sobre cómo un visitante utiliza un sitio web. Por ejemplo,
          desde qué página web se ha accedido, o si ha utilizado un “banner”
          publicitario para llegar. ¿Qué tipo de cookies utiliza Happy Vecinos y
          para qué?
          <br />
          <br />
          Happy Vecinos utiliza en el Sitio Web las siguientes cookies:
          <br />
          Cookies técnicas y cookies de personalización, estrictamente
          necesarias para facilitar la navegación del Usuario por el Sitio Web,
          así como para la prestación de determinados servicios solicitados
          expresamente por el Usuario: si se desactivan estas cookies, el
          Usuario no podrá recibir o acceder correctamente a los contenidos y
          servicios prestados por Happy Vecinos. Cookies analíticas (para el
          seguimiento y análisis estadístico del comportamiento del conjunto de
          los Usuarios): la información captada por estas cookies sobre el uso
          de nuestra web permite los nuestros servicios de Happy Vecinos. Si se
          desactivan estas cookies, el sitio web podrá seguir funcionando sin
          problemas.
          <br />
          Para cumplir con la legislación vigente, tenemos que pedir su permiso
          para gestionar cookies. Si decide no autorizar el tratamiento
          indicándonos su no conformidad, sólo usaríamos las cookies técnicas,
          puesto que son imprescindibles para la navegación por nuestra web. En
          este caso, no almacenaríamos ninguna cookie. En el caso de seguir
          navegando por nuestro sitio Web sin denegar su autorización implica
          que acepta su uso. Tenga en cuenta que si rechaza o borra las cookies
          de navegación por la Web, no podremos mantener sus preferencias,
          algunas características de las páginas no estarán operativas, no
          podremos ofrecerle servicios personalizados y cada vez que vaya a
          navegar por nuestra Web tendremos que solicitarle de nuevo su
          autorización para el uso de cookies. El Usuario decide si acepta o no
          las cookies configurando su navegador web. Forma de desactivar o
          eliminar las cookies El Usuario puede permitir, bloquear o eliminar
          las cookies instaladas en su equipo mediante la configuración de las
          opciones del navegador instalado en su ordenador. Los pasos para
          hacerlo en los navegadores más populares son los siguientes: Internet
          Explorer Firefox Chrome
          <br />
          El Sitio Web puede contener enlaces de redes sociales (como Facebook o
          Twitter). Happy Vecinos no controla las cookies utilizadas por estas
          redes externas.
          <br />
          <br />
          XI. IMÁGENES.
          <br />
          Se atribuye la imagen de la página de inicio la R-evolución a
          HAutorizo a:
          <br />
          <div className="underline">
            I. Happy Vecinos S.L., con NIF B02791382, y con domicilio a efecto
            de notificaciones en Av. Pla del Vinyet 111 Sant Cugat del Vallès,
            quien actúa como Responsable del Tratamiento de datos personales,
            para que en los términos legalmente establecidos realice la
            recolección, almacenamiento, uso, circulación, supresión y en
            general, el tratamiento de mis datos personales que he procedido a
            entregar o que entregaré, tal y como se dispone en la Ley Orgánica
            3/2018, de 5 de diciembre, de Protección de Datos Personales y
            garantía de los derechos digitales (LOPDGDD) y el Reglamento (UE)
            2016/679, general de protección de datos (RGPD). En este sentido,
            afirmo que he sido informado que el uso de mis datos personales
            tiene la siguiente finalidad: Para realización de cualquier trámite
            inherente a la administración de la Comunidad de Propietarios. A tal
            fin consiento y autorizo expresamente para la remisión de
            comunicaciones comerciales, ofertas, propuestas y ventajas
            promocionales indicadas por cualquier medio, incluido por medios
            electrónicos (teléfono, correo electrónico o medio equivalente).
            <br />
            <br />
            II. Asimismo, se informa que los datos personales pueden ser
            transferidos y tratados por terceras personas con las que se firme
            un acuerdo de colaboración. Con la firma de la presente
            autorización, consiento expresamente para el caso de que mis datos
            personales sean cedidos a terceras personas.
            <br />
            <br />
            III. Del mismo modo, siempre que así se estime, el interesado podrá
            ejercitar su derecho de acceso, rectificación, cancelación,
            oposición o portabilidad relativo a este tratamiento, dirigiéndose
            siempre por escrito al siguiente correo electrónico:
            <span className="underline">
              info@<span className="underline">happyvecinos.com</span>
            </span>
            <br />
            <br />
            IV. Los datos personales serán guardados mientras se mantenga la
            vinculación con el responsable. Al finalizar los mismos, los datos
            personales tratados en cada una de las finalidades indicadas, se
            mantendrán durante los plazos legalmente previstos. Cuando los datos
            de carácter personal hayan dejado de ser necesarios para el
            cumplimiento de las finalidades previstas y las disposiciones
            legales aplicables, serán cancelados. Orden domiciliación adeudos
            directos SEPA. Se permite la domiciliación de adeudos y autorizo a
            la Comunidad de Propietarios a enviar instrucciones a la entidad
            bancaria para adeudar la cuenta indicada y a la entidad para
            efectuar los adeudos en su cuenta siguiendo las instrucciones de la
            Comunidad de Propietarios. Modalidad Tipo de pago Recurrente.
            Notificaciones. Apruebo el uso de medios tecnológicos de
            comunicación y solicito expresamente que las comunicaciones de
            cualquier índole con y para la Comunidad de Propietarios reseñada se
            realicen en el correo electrónico designado en el presente
            documento. No obstante, acepto como medio las comunicaciones
            publicadas en el tablón de anuncios digital (noticias) del área
            privada de usuario del sitio https://mi.
            <span className="underline">happyvecinos.com</span> Asistencia y
            votación a distancia a la junta. Acepto adoptar:
            <br />
            <br />
            I) El uso de la videoconferencia o por otros medios telemáticos de
            comunicación sincrónica similares en las juntas de propietarios y la
            posibilidad de la grabación de estas, recogiendo si cabe el
            contenido de todo lo aprobado en junta en un documento de archivo
            electrónico de custodia. Acepto poder delegar por videoconferencia
            la participación en uno de los propietarios asistentes y cederle la
            asistencia y voto para desconectar después y dejar al representante.
            También poder delegar el voto enviando al administrador de fincas,
            antes de que comience la junta, el impreso de delegación rellenado
            con mis datos y de la persona a quien delego, así como su correo
            electrónico.
            <br />
            <br />
            II) El uso del voto telemático asincrónico en dichas Juntas,
            garantizando debidamente la identidad del propietario en el área
            privada de usuario en
            <span className="underline">https://mi.happyvecinos.com</span> o
            análoga plataforma. Se considera válido el voto ejercitado por el
            propietario por medio de escrito con firma legitimada o por medio de
            votación telemática con firma electrónica simple. No obstante,
            acepto dichos medios aun sin legitimación de firma ni firma
            electrónica.
            <br />
            <br />
            III) La posibilidad de adoptar acuerdos sin reunión mediante la
            emisión de voto por correspondencia postal, telemática o cualquier
            otro medio de conformidad con lo dispuesto en el artículo 312-7 del
            Código Civil de Cataluña. Nota. Cada convocatoria recogerá el uso de
            la videoconferencia para permitir la asistencia a junta haciendo
            constar la metodología a seguir, concretamente se incluirá el
            sistema tecnológico que se utilizará para intervenir en la junta en
            fórmula no presencial. Aquellos propietarios que no disponen de
            medios para poder llevar a efecto la conexión, y no quisieren
            delegar el voto, pueden acudir al domicilio de otro propietario para
            estar presente en la conexión.
            <br />
            <br />
            IV. PLAZO DE CONSERVACIÓN DE LOS DATOS Happy Vecinos mantendrá los
            datos de carácter personal mientras exista una relación contractual
            y/o comercial con el Usuario. En caso de ejercer cualquier derecho
            que implique la eliminación total o parcial de éstos, mantendremos
            los datos debidamente bloqueados durante el período legal
            establecido en la normativa que fuera de aplicación, sin darle
            ningún uso.
            <br />
            <br />
            V. LEGITIMACIÓN <br /> La base legal para el tratamiento de los
            datos de los Usuarios con las finalidades antes señaladas radica en:
            La ejecución de un contrato en <br /> relación con la finalidad
            indicada en el apartado Términos y condiciones; El interés legítimo
            existente en transmitir datos personales entre los responsables del
            grupo empresarial del que forma parte Happy Vecinos con fines de
            mercadotecnia directa. El consentimiento expreso, específico,
            inequívoco, libre e informado del Usuario en relación con las
            materias indicadas en el apartado “Finalidad del tratamiento” que
            tengan que ver con finalidades comerciales o promocionales, de
            cesión a terceros (teniendo Happy Vecinos que solicitar el
            consentimiento expreso para cada cesión no legitimada) o
            cualesquiera otras que no se haya recabado inicialmente con el
            registro del Usuario; El interés legítimo de Happy Vecinos de
            acuerdo con la normativa de aplicación siempre que no prevalezcan
            los derechos e intereses de los Usuarios, se tenga en cuenta las
            expectativas razonables de éstos basadas en su relación con Happy
            Vecinos, y se haya analizado meticulosamente caso por caso desde
            Happy Vecinos ;
            <br />
            <br />
            VI. DESTINATARIOS <br /> No se comunicarán datos a terceros, salvo
            previa autorización mediante consentimiento expreso por el Usuario.
            No hay transferencias internacionales. Asimismo, los Usuarios que,
            conforme a las Términos y condiciones, sean considerados Usuarios
            Miembros de una Comunidad y/o Usuarios espóradicos (no miembros de
            una Comunidad), y que se hayan puesto en contacto a través de
            <span className="underline">happyvecinos.com</span> con ocasión de
            contratar cualquier actividad con o para la propiedad se articula a
            través de la presente Web, aceptan que sus datos puedan ser
            accedidos respectivamente entre ellos para poder continuar con el
            servicio contratado. Los destinatarios de la información
            suministrada, se comprometen en la utilización de los datos
            facilitados, a respetar su confidencialidad y a utilizarlos de
            acuerdo a las finalidades previamente autorizadas.
            <br />
            <br /> VII. ALOJAMIENTO DE LOS DATOS Todos los datos recopilados por
            <span className="underline">happyvecinos.com</span> están alojados
            en la Unión Europea, ya bien sea en sus servidores o en los de
            empresas de hosting con los que Happy Vecinos ha contratado dicho
            servicio, estando éstos últimos certificados por la ISO 27001.
            <br />
            <br /> VIII. INFORMACIÓN SOBRE LAS VISITAS A LA WEB Happy Vecinos
            recaba la información facilitada por el Usuario de forma activa o
            por estar navegando en la Web de a efectos estadísticos y
            publicitarios, para controlar el uso de la Web y para mejorar el
            conocimiento sobre los intereses del Usuario. Esta información se
            utiliza por Happy Vecinos para saber el tiempo de carga de la
            presente Web, el porcentaje de rebote, idioma empleado, cómo se
            utiliza la Web, el número de visitas y el tipo de información que
            más se consulta por el Usuario. Esta información ayuda a identificar
            si Web funciona correctamente. De esta manera, si se detectasen
            fallos o errores en el funcionamiento, se procedería con soluciones
            y mejoras del rendimiento de la Web, para poder ofrecer un mejor
            servicio a todos los Usuarios. <br />
            <br /> IX. MENORES DE EDAD
            <br /> Los Usuarios que envíen información personal a Happy Vecinos
            declaran que la información y los datos facilitados son exactos y
            veraces, así como que es mayor de 14 años. Asimismo, sólo estarán
            facultados para contratar servicios aquellos Usuarios registrados
            mayores de 18 años que dispongan de la capacidad legal necesaria.
          </div>
          <>
            <br />| Vector de Negocios creado por vectorpouch -{" "}
            <span className="underline">www.freepik.es.</span> <br /> <br />{" "}
            XII. PROPIEDAD INTELECTUAL E INDUSTRIAL. Happy Vecinos por sí o como
            parte cesionaria, es titular de todos los derechos de propiedad
            intelectual e industrial del Sitio Web, así como de los elementos
            contenidos en el mismo (a título enunciativo y no exhaustivo,
            imágenes, sonido, audio, vídeo, software o textos, marcas o
            logotipos, combinaciones de colores, estructura y diseño, selección
            de materiales usados, programas de ordenador necesarios para su
            funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras
            protegidas como propiedad intelectual por el ordenamiento jurídico
            español, siéndoles aplicables tanto la normativa española y
            comunitaria en este campo, como los tratados internacionales
            relativos a la materia y suscritos por España. Todos los derechos
            reservados. En virtud de lo dispuesto en la Ley de Propiedad
            Intelectual, quedan expresamente prohibidas la reproducción, la
            distribución y la comunicación pública, incluida su modalidad de
            puesta a disposición, de la totalidad o parte de los contenidos de
            esta página web, con fines comerciales, en cualquier soporte y por
            cualquier medio técnico, sin la autorización de Happy Vecinos. El
            Usuario se compromete a respetar los derechos de propiedad
            intelectual e industrial de Happy Vecinos. Podrá visualizar los
            elementos del Sitio Web o incluso imprimirlos, copiarlos y
            almacenarlos en el disco duro de su ordenador o en cualquier otro
            soporte físico siempre y cuando sea, exclusivamente, para su uso
            personal. El Usuario, sin embargo, no podrá suprimir, alterar, o
            manipular cualquier dispositivo de protección o sistema de seguridad
            que estuviera instalado en el Sitio Web. En caso de que el Usuario o
            tercero considere que cualquiera de los Contenidos del Sitio Web
            suponga una violación de los derechos de protección de la propiedad
            intelectual, deberá comunicarlo inmediatamente a Happy Vecinos a
            través de los datos de contacto del apartado de INFORMACIÓN GENERAL
            de este Aviso Legal y Condiciones Generales de Uso.
          </>
        </>
      </section>
      <footer className="bg-[#1f2937] py-5 px-20 mt-10">
        {/* links */}
        <div className="flex flex-col lg:flex-row justify-between text-white mb-8 py-5 container mx-auto text-center">
          {/* link col-1  */}
          <ul className="space-y-3 mt-8 md:mt-0">
            <li className="text-[#69707e] font-medium">ACCESO RÁPIDO</li>
            <li>
              <a href="#">Crear cuenta</a>
            </li>
            <li>
              <a href="#">Iniciar sesión</a>
            </li>
            <li>
              <a href="#" className="underline">
                Precios
              </a>
            </li>
          </ul>
          {/* link col-2  */}
          <ul className="space-y-3 mt-8 md:mt-0">
            <li className="text-[#69707e] font-medium">SOBRE NOSOTROS</li>
            <li>
              <a href="#" className="underline">
                Conócenos
              </a>
            </li>
          </ul>
          {/* link col-3   */}
          <ul className="space-y-3 mt-8 md:mt-0">
            <li className="text-[#69707e] font-medium">LEGAL</li>
            <li>
              <a href="#" className="underline">
                Política de cookies
              </a>
            </li>
            <li>
              <Link to="/cookies" className="underline">
                Política de privacidad <br /> Términos y condiciones
              </Link>
            </li>
          </ul>

          {/* link col-5 / IDIOMA  */}
          <ul>
            <li className="text-[#69707e] font-medium">IDIOMA</li>
            <select
              className="bg-[#1f2937] mt-2 border rounded-md p-1"
              name="idioma"
              id=""
            >
              <option value="Español">Español</option>
            </select>
          </ul>
        </div>
        {/* divider */}
        <hr />
        {/*copyright and  social  */}
        <div className="flex flex-col md:flex-row justify-between items-center my-8 container mx-auto">
          {/* copyright  */}
          <p className="text-[#69707e]">
            <small>
              &copy;2023 Cybar Security. Todos los derechos reservados.
            </small>
          </p>
          {/* social icon  */}
          <div className="flex gap-5 my-3 md:my-0 text-white">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Cookies;

// • COOKIES ESTRICTAMENTE NECESARIAS: Las cookies necesarias ayudan a hacer que un sitio web sea utilizable al permitir funciones básicas como la navegación de la página y el acceso a áreas del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.
// Las cookies estrictamente necesarias no requieren el tratamiento de datos personales, y en consecuencia, no están sujetas a la normativa de privacidad.
