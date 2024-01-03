import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Fourteen() {
  const [type, setType] = useState("Mensual");
  return (
    <div className="bg-[#f9fafc] p-8 container" id="price">
      <div className="text-center">
        <div className="space-y-6 mb-8">
          <p>¿No te decides? Habla con el equipo de Ventas: </p>
          <p className="">+34 684 083 197</p>
        </div>
        <h1 className="text-4xl font-bold">Empieza tu prueba gratis</h1>
        <p className="text-lg mt-2">
          Prueba Happy Vecinos gratis durante 14 días. No necesitas tarjeta de
          crédito.
        </p>
        <div className="flex justify-center gap-2 mt-6 bg-gray-200 w-min mx-auto py-1 px-1 rounded-xl">
          <Button
            className={`${
              type === "Mensual"
                ? "bg-white hover:bg-white text-primary"
                : "hover:bg-white"
            }  px-6 `}
            variant="ghost"
            onClick={() => setType("Mensual")}
          >
            Mensual
          </Button>
          <Button
            className={`${
              type === "Anual"
                ? "bg-white hover:bg-white text-primary"
                : "hover:bg-white"
            }  px-6 `}
            variant="ghost"
            onClick={() => setType("Anual")}
          >
            Anual
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Básico – Comunidad Conectada</CardTitle>
            <CardDescription>
              Simplifica la gestión de tu comunidad con las funciones
              esenciales.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {type === "Mensual" ? 30 : 300} € por mes{" "}
              <span className="text-xl text-gray-600">/piso</span>{" "}
            </p>

            <Button className="my-4  bg-primary w-full">Empieza gratis</Button>
            <p className="text-md font-semibold">Funcionalidades incluidas:</p>
            <ul className="mt-2">
              <li>✔ 200 incidencias gestionadas al año</li>
              <li>✔ 50 reservas de espacios comunes al año</li>
              <li>✔ Gestión de hasta 10 proveedores</li>
              <li>✔ Soporte para 2 administradores de la comunidad</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>Incluye</p>
              <ul className="list-disc pl-5">
                <li>Directorio de vecinos y proveedores</li>
                <li>Calendario de eventos comunitarios</li>
                <li>Gestión básica de cuotas y pagos</li>
                <li>Archivo digital de juntas y documentos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Avanzado – Gestión Avanzada</CardTitle>
              <Badge
                className="ml-2 text-primary bg-blue-100"
                variant="secondary"
              >
                El más popular
              </Badge>
            </div>
            <CardDescription>
              Automatiza y optimiza la gestión de tu comunidad con herramientas
              mejoradas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {type === "Mensual" ? 50 : 500}€ por mes{" "}
              <span className="text-xl text-gray-600">/piso</span>{" "}
            </p>

            <Button className="my-4  bg-primary w-full">Empieza gratis</Button>
            <p className="text-md font-semibold">Funcionalidades incluidas:</p>
            <ul className="mt-2">
              <li>✔ Incidencias ilimitadas</li>
              <li>✔ Reservas ilimitadas de espacios comunes</li>
              <li>✔ Gestión de hasta 50 proveedores</li>
              <li>✔ Soporte para 5 administradores de la comunidad</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>Incluye</p>
              <ul className="list-disc pl-5">
                <li>Todo lo del plan Básico proveedores</li>
                <li>Herramientas avanzadas de gestión de incidencias</li>
                <li>Sistema de votación y encuestas</li>
                <li>Integración con servicios externos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Premium – Administración Integral</CardTitle>
            </div>
            <CardDescription>
              La solución completa para una gestión y comunicación sin
              precedentes en tu comunidad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {type === "Mensual" ? 70 : 700}€ por mes{" "}
              <span className="text-xl text-gray-600">/piso</span>{" "}
            </p>
            <Button className="mt-4  bg-primary w-full">Empieza gratis</Button>
            <ul className="mt-4">
              <li>✔ Todas las funcionalidades son ilimitadas</li>
              <li>✔ Gestión de cualquier número de proveedores</li>
              <li>✔ Soporte para un número ilimitado de administradores</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>INCLUYE</p>
              <ul className="list-disc pl-5">
                <li>Todo lo del plan Avanzado</li>
                <li>Portal personalizado para vecinos</li>
                <li>Gestión financiera y presupuestaria avanzada</li>
                <li>Asistencia y asesoría legal y contable</li>
                <li>Soporte premium y atención prioritaria</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
