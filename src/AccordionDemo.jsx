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
      defaultValue="item-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="border border-lime-600 p-0">
          <div className="text-white text-center text-3xl font-medium leading-7 flex justify-center items-center border bg-red-400  h-[68px] w-20 px-4  rounded border-solid border-lime-600">
            01
          </div>{" "}
          <p className="px-5 ">
            ¿Qué son las Garantías de Origen (GdOs) y por qué son importantes?
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-red-400 bg-opacity-40 ">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" open={true}>
        <AccordionTrigger className="border border-lime-600 p-0" open={true}>
          <div className="text-white text-center text-3xl font-medium leading-7 flex justify-center items-center border bg-red-400  h-[68px] w-20 px-4  rounded border-solid border-lime-600">
            02
          </div>{" "}
          <p className="px-5 ">
            ¿Cómo puedo comprar o vender GdOs en GdOs Trade?
          </p>
        </AccordionTrigger>
        <AccordionContent
          open={true}
          className="p-8  bg-red-400 bg-opacity-40 "
        >
          Para comprar o vender GdOs en GdOs Trade, primero debes registrarte en
          nuestra plataforma. Una vez registrado, puedes navegar por las ofertas
          disponibles o crear tu propia oferta de venta. Utiliza nuestros
          filtros para encontrar exactamente lo que necesitas y sigue las
          instrucciones para completar la transacción de manera segura y
          eficiente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="border border-lime-600 p-0">
          <div className="text-white text-center text-3xl font-medium leading-7 flex justify-center items-center border bg-red-400  h-[68px] px-4  rounded border-solid w-20 border-lime-600">
            03
          </div>{" "}
          <p className="px-5 ">
            ¿Qué tipos de energías renovables están disponibles en GdOs Trade?
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-8  bg-red-400 bg-opacity-40 ">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
