import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Qué ventajas me ofrece Happy Vecinos?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Sencillez. <br /> Reuniones, presupuestos, derrama, discusiones,
          comisiones... ¿Te suena? Seguramente, la relación consentida menos
          placentera que exista. Happy Vecinos lo hace más fácil para ti.
          Garantizamos máxima transparencia y rigor en la información
          presentada. Mejoramos la experiencia y la comunicación. ¡Conseguimos
          un ahorro de verdad! Y sobretodo, Compromiso.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Por qué Happy Vecinos?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          ¡Hemos cambiado las reglas del juego! Somos la primera plataforma de
          administración de propiedades que se erige como un método de ahorro,
          ofreciendo Seguridad, mayor calidad y el mejor precio. <br /> ¡Una
          empresa atípica! <br /> Nuestro propósito es contribuir positivamente
          a la sociedad, poniendo fin a prácticas dudosas e irregulares y el
          cobro de comisiones ocultas. Nos definimos como una organización
          empresarial democrática donde todo el equipo participa directamente
          del excedente de beneficio, porque el trabajo es un bien común. Una
          empresa 100% sostenible, donde se aplican las políticas de
          responsabilidad social corporativa o criterios ESG (Environmental,
          Social and Governance).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Cómo puedo contactar con Happy Vecinos?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Tendrás asignado un gestor personal administrador de fincas colegiado,
          tu Administrador. Podrás contactar con él mediante envío de
          formulario, chat, teléfono móvil, whatsapp o correo electrónico todos
          los días de lunes a viernes de 8 a 18h.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Qué servicios incluye el Plan Premium?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Además de un asesoramiento experto ante cualquier duda, necesidad o
          situación que surja en la Comunidad y/o a propietarios, el Plan
          Premium incluye la administración integral de tu comunidad. Con esta
          administración podréis despreocuparos del día a día de las gestiones
          de vuestra Comunidad. Los servicios que incluye el Plan Premium son:
          Una Tarifa única por vivienda. Una tarifa plana para la gestión de tu
          comunidad que incluye todo lo que necesitas. Gestión presencial.
          Cercanía y proximidad. Happy Vecinos dispone, se gestiona, con un
          equipo de proximidad a las Comunidades, concretamente esta persona
          será vuestro Administrador (gestor de confianza) y velará por cumplir
          las tareas que sean necesarias para el óptimo funcionamiento de la
          Comunidad. Acceso online a tu área de usuario
          [https://mi.happyvecinos.eu](https://mi.happyvecinos.eu/) Toda la
          información relacionada con tu Comunidad al alcance de tu mano, sin
          moverte de casa, de un modo sencillo y a solo un click, realiza todas
          las gestiones que necesites. Como miembro de Happy Vecinos dispondrás
          de un acceso particular a una plataforma exclusiva desde la que podrás
          estar a la última en tu comunidad, realizar votaciones, descargar
          documentos, leer el tablón de anuncios, acceder a servicios exclusivos
          y mucho más... Juntas Ordinarias y extraordinarias. Preparación,
          emisión convocatorias de las Juntas de la Comunidad desde el tablón de
          anuncios de [https://mi.happyvecinos.eu](https://mi.happyvecinos.eu/)
          y aviso por correo electrónico o postal, incluye posterior confección
          del Acta correspondiente. El Plan incluye la Junta Ordinaria anual
          presencial. No están incluidas las Juntas extraordinarias presenciales
          en los honorarios ordinarios de administración y, en consecuencia,
          serán objeto de facturación separada e independiente, ver servicios
          con tarificación especial. Contabilidad Comunidad. Cálculo del
          presupuesto / liquidación anual de ingresos y gastos, desglose de
          gastos por partidas, así como la asignación que corresponda por
          coeficiente propiedad. Incluye emisión de recibos para el cobro de las
          cuotas ordinarias y extraordinarias, así como el pago y mantenimiento
          de recibos de la Comunidad. Financiación obras de mejora y de
          rehabilitación. Control y seguimiento de obras. Servicio sujeto al
          pago de intereses y/o comisiones. Alta y seguimiento
          siniestros/incidencias acaecidos en la Comunidad. Contacto con
          proveedores y apertura, si procede, del parte con la compañía
          aseguradora y seguimiento de la reparación. Servicio reclamación
          cuotas impagadas, seguimiento y cobro. Expedición certificados deuda.
          Servicio sujeto al pago adicional. Propuestas de ahorro con
          proveedores locales. Nuestro equipo siempre te propondrá ofertas de
          proveedores locales para que vuestra Comunidad los valore y se
          beneficie de un ahorro. Revisamos constantemente la evolución de
          precios de los principales proveedores para conseguir el mismo
          servicio al mejor precio. Este servicio está sujeto a una comisión por
          éxito del 50% sobre el ahorro conseguido (IVA incluido). Y sólo se
          aplica sobre el primer ahorro conseguido.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Qué ventajas tiene?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Una gestión profesional y de proximidad. Cada Comunidad dispondrá de
          un equipo de proximidad, concretamente esta persona será vuestro
          gestor de confianza, un Administrador, una persona responsable que
          velará por cumplir las tareas que sean necesarias para el óptimo
          funcionamiento de la Comunidad. • Tarifas Una tarifa plana para la
          gestión de tu comunidad que incluye todo lo que necesitas. Con nuestro
          Plan Premium nos preocupamos y ocupamos de la administración integral
          de tu Comunidad con un asesoramiento experto. Administración 360º. Una
          única tarifa para un servicio integral de calidad. Reenamórate de tu
          comunidad con Happy Vecinos. Un administrador que conoce tu comunidad
          al detalle y proporciona un servicio personalizado que incluimos una
          plataforma online exclusiva para tu comunidad. Hemos desarrollado
          [https://mi.happyvecinos.eu](https://mi.happyvecinos.eu/) desde la que
          podrás estar a la última en tu comunidad, realizar votaciones,
          descargar documentos, leer el tablón de anuncios, acceder a servicios
          exclusivos y mucho más... Contabilidad. Cálculo del
          presupuesto/liquidación anual de ingresos y gastos, desglose de gastos
          por partidas, así como la asignación que corresponda por coeficiente
          propiedad. Incluye emisión de recibos. Juntas/Reuniones. Preparación
          reuniones realizando entrega de la guía del Presidente (soporte para
          conducir la reunión) con los diferentes puntos del orden del día.
          Convocatoria juntas ordinarias/extraordinarias telemáticamente. No
          están incluidas las Juntas extraordinarias presenciales en los
          honorarios ordinarios de administración y, en consecuencia, serán
          objeto de facturación separada e independiente, ver servicios con
          tarificación especial. Actas. Confección, custodia y envío de las
          actas. Acceso online a
          [https://mi.happyvecinos.eu](https://mi.happyvecinos.eu/) Toda la
          información relacionada con tu Comunidad al alcance de tu mano.
          Incidencias/Reparaciones urgentes. Alta y seguimiento
          siniestros/incidencias acaecidos en la Comunidad. Contacto con
          proveedores y apertura, si procede, del parte con la compañía
          aseguradora y seguimiento de la reparación. Financiación obras de
          mejora y de rehabilitación. Control y seguimiento de obras.
          Tramitación documentación relativa a gestionar ayudas económicas a la
          rehabilitación. Servicio sujeto al pago de intereses y/o comisiones.
          Impagados. Servicio reclamación cuotas impagadas, seguimiento y cobro.
          Otros gastos y suplidos. La tarifa ya incluye gastos franqueo o
          mensajería ordinaria, fotocopias, consumos de teléfono, consumibles y
          material de oficina en general. Asesoramiento experto. Asesoramiento
          experto y profesional en el ámbito de la Ley de Propiedad Horizontal y
          sobre las mejores estrategias procesales y extrajudiciales de
          reclamación de cantidad. Ahorro proveedores. El Plan incluye un método
          de ahorro que consiste en analizar los gastos y conseguir rebajas con
          los principales proveedores. Tratamos el asunto con los actuales y
          nuevos proveedores locales para que vuestra Comunidad lo valore y se
          beneficie de un ahorro. Revisamos constantemente la evolución de
          precios de los principales proveedores para conseguir el mismo
          servicio al mejor precio. Servicios extraordinarios retribuidos de
          forma independiente. Por cada posición deudora vencida e impagada
          (demora en el pago de cuotas). Realizamos un control exhaustivo de las
          cuotas impagadas. Profesionales especializados en la mediación
          intentan una resolución extrajudicial y alternativa para conseguir una
          recuperación rápida, con muy escasos costes y sin afectar a la buena
          convivencia y relación vecinal. Gestión placa prohibición de aparcar
          ante los servicios municipales. Se percibirá 121,00€. Envío de
          mensajería urgente. Se percibirá 18,15€ por envío. Envío de burofax.
          Se percibirá 44,00€ por envío y además 1,30€ por cada página
          adicional. Trámite Constitución Comunidad € 363,00€. Incluye
          confección acta constitución, adquisición y registro libro actas en el
          Registro Propiedad, solicitud del NIF y apertura cuenta corriente
          Comunidad. Por obtención del certificado digital de la Comunidad se
          percibirá 72,60€. Control y seguimiento de Obras. Aquellas obras que
          requieran tramitación de licencia y que tengan un importe superior a
          5.000€ se cobrará el 3% del importe de la obra. Tarifas con IVA
          incluido.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Qué es y para qué sirve un Administrador?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Se trata de un gestor de confianza que Happy Vecinos ofrece a la
          Comunidad sin ningún coste adicional y con el objetivo de que les
          ayude a: Facilitar y agilizar la relación del día a día:
          convocatorias, visitas periódicas al edificio, gestión de incidencias,
          propuestas de ahorro, resolver dudas sobre un aspecto concreto... Un
          gestor personal al servicio de tu comunidad gracias a una comunicación
          directa, personal e individualizada. Y con el respaldo de un equipo
          que te acompaña en todo momento.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Cómo puedo hacer el cambio de Administrador?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Ser miembro de Happy Vecinos es muy sencillo y sólo se tarda 1 minuto:
          Completa el formulario de apertura con tus datos (Formulario) y
          contactaremos contigo. Los siguientes pasos serán: Convocar reunión
          extraordinaria, con un mínimo de 8 días naturales (para Cataluña; 6
          días para el resto de Comunidades Autónomas), para acordar el cese de
          administrador y nombramiento del nuevo administrador Happy Vecinos
          Property Management S.L. Junta que puede convocar Presidente, o bien,
          el 25% de los propietarios. Es suficiente el voto favorable de la
          mayoría simple de los propietarios que asistan (a su vez, se requiere
          que corresponda al 50,1% o más de los coeficientes de los propietarios
          que asisten a la Junta). Enviar acta de la reunión a Happy Vecinos y
          entonces, en ese momento, comunicaremos el cambio al antiguo
          administrador (trámite que requiere un preaviso de 1 mes). En cuanto
          hayamos recibido la documentación de tu antiguo administrador
          comenzarás a beneficiarte de todas las ventajas de Happy Vecinos. Se
          trata de un servicio totalmente gratuito. Si necesitas soporte para
          realizar la convocatoria contacta con nosotros.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Cómo es posible que seamos tan competitivos?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          En Happy Vecinos, nuestra competitividad radica en nuestra presencia
          global y adaptabilidad local. Cada ciudad en la que operamos cuenta
          con una oficina dedicada, lo que nos permite tener un pulso constante
          sobre las necesidades y dinámicas de cada comunidad. No solo nos
          encontramos en cada rincón geográfico, sino que nuestras oficinas
          están diseñadas para ofrecer una experiencia de atención insuperable.
          Cada espacio refleja nuestra dedicación a la excelencia y nuestro
          compromiso con la satisfacción del cliente. Al elegir Happy Vecinos,
          estás eligiendo una red global con un toque personal y local. ¡Presume
          de colaborar con la empresa que pone el mundo a tus pies y te atiende
          con un detalle inigualable en cada oficina!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="  ">
          <p className="px-5 ">
            ¿Cómo conocer el coeficiente propiedad? ¿Dónde encuentro la
            referencia catastral?
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          La puedes encontrar en cualquier recibo del IBI, o bien, por Internet,
          accediendo a la Sede electrónica del Catastro en la dirección
          https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Cómo se administra la Comunidad?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Cuenta comunidad. Plena transparencia. Tu comunidad dispondrá de una
          cuenta bancaria propia, este método permite pagar a los proveedores
          directamente desde la cuenta, consultar las facturas y el saldo
          disponible, además de conocer los recibos pendientes de cobro.
          Garantía 100% 100% Happiness Guarantee. Nuestra prioridad número uno
          es tu felicidad. Lo que significa que respondemos por nuestro servicio
          al 100%, pase lo que pase, cueste lo que cueste. Si hay algún problema
          lo solucionaremos. Insistiendo, acercándonos, trabajando con rigor,
          adaptándonos, resolviéndolo, lo que sea necesario. Ponemos verdadero
          empeño en lo que hacemos, hasta el punto que si algo no funciona te
          reembolsaremos los honorarios de la última liquidación. Queremos que
          estés feliz, que disfrutes de lo que de verdad importa, y si no es
          así, al menos nosotros os recompensaremos. Y sí, somos los únicos en
          hacerlo con una garantía de este tipo, lo que llamamos 100% Happiness
          Guarantee. Seguridad Para tu tranquilidad, contamos con un gran número
          de administradores de fincas colegiados que cuentan con amplias
          garantías legales cada cuál con... un seguro de responsabilidad civil
          con una cobertura de hasta 700.00€ y un seguro de caución con una
          garantia de hasta 30.000€. Su función es cubrir los posibles daños y
          perjuicios en que podamos incurrir sobre terceros en el desempeño de
          nuestro trabajo. Se trata de una responsabilidad contemplada en los
          artículos 1903 y 1902 del Código Civil que establecen la
          obligatoriedad de reparar el daño causado por acción u omisión
          interviniendo culpa o negligencia. Así pues, se garantiza una
          indemnización o compensación en caso de reclamación por los daños y
          perjuicios económicos, ya sea personales o materiales de los que
          seamos responsables.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger className="  ">
          <p className="px-5 ">
            ¿Qué incluye los servicios adicionales a la propiedad?
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Asesoramiento en operaciones de compraventa. Arrendamiento de
          inmuebles, análisis de solvencia del inquilino, confección de contrato
          de alquiler y depósito de fianza. Protección Hogar Estudio de
          eficiencia energética. Consulta con tu Administrador.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger className="  ">
          <p className="px-5 ">¿Cómo se aplica la comisión por éxito?</p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Se trata de una tarifa variable, pues tan sólo se aplica si, tras
          nuestra gestión, se ha conseguido un ahorro, además ¡tan sólo se
          aplica en el primer ahorro conseguido! En caso contrario, si no se
          consigue un ahorro no es posible aplicar la comisión por éxito. Esta
          comisión del 50% sobre el ahorro conseguido se devengará al final de
          cada año natural. Esta comisión es directamente un ahorro neto para la
          Comunidad, pues en el importe ya se incluyen los impuestos aplicables
          (IVA del 21%), con lo que el ahorro financiero-fiscal aún es mayor.
          Veamos un ejemplo, Happy Vecinos bajo el Plan Premium empieza a
          administrar la Comunidad ABC. Desde un inicio analizaremos los gastos,
          conseguiremos rebajas económicas con los principales proveedores y,
          del ahorro conseguido, nos repartiremos el beneficio (50/50). Ejemplo
          de cálculo para un ahorro conseguido con 2 proveedores, Partidas con
          tu Administrador tradicional Mantenimiento ascensor 2.400€ Consumo
          electricidad 1.600€ Total gasto actual 4.000€ Partidas con Happy
          Vecinos Mantenimiento ascensor 1.800€ Consumo electricidad 1.200€
          Total gasto próximo año 3.000€ Ahorro total de 1.000€ Ahorro neto
          Comunidad de 500€ Comisión por éxito de 500€ (IVA incluido*) Al
          incluir impuestos aplicables (IVA del 21%) la cuota real es de 413,22€
          + 86,78€ (IVA) = 500€. Nota importante: comisión no aplicable a partir
          del segundo ahorro. ¡Tan sólo se aplica en el primer ahorro
          conseguido! En el ejemplo, tu Comunidad tendría un ahorro de 1r año
          500€ 2n año (y sucesivos) de 1.000€ Ahorraréis 9.500€ en 10 años.
          Supuestos especiales. Se consideran un caso especial la contratación
          de nuevos servicios no existentes hasta la fecha, en este caso la
          comisión por éxito del 50% del ahorro conseguido se aplicará bajo el
          modelo de concurso de propuestas por parte de los proveedores. Ver FAQ
          Concurso proveedores.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger className="  ">
          <p className="px-5 ">
            ¿Tiene coste la emisión del certificado de deuda?
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-opacity-40 ">
          Se trata de un servicio adicional con un cargo de 55€ IVA incluido.
          Atención prioritaria todos los días las 24h ¡Contacta con tu
          Administrador a cualquier hora! Pensado para los que quieren atención
          de incidencias sin esperas. Se trata de un servicio adicional con un
          cargo de 60,00€ para la comunidad al mes + IVA. LOPD Nos ocupamos del
          cumplimiento legal de todas las obligaciones de su Comunidad en
          materia de Protección de Datos de Carácter Personal (R.G.P.D.),
          Prevención de Riesgos Laborales (P.R.L.), y Coordinación de
          Actividades Empresariales (C.A.E.) con empresas líderes del sector.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
