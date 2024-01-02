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

export default function Fourteen() {
  return (
    <div className="bg-white p-8 container">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Empieza tu prueba gratis</h1>
        <p className="text-lg mt-2">
          Prueba Holded gratis durante 14 días. No necesitas tarjeta de crédito.
        </p>
        <div className="flex justify-center gap-2 mt-6 bg-gray-200 w-min mx-auto py-1 px-1 rounded-xl">
          <Button className="bg-white px-6 hover:bg-white text-primary">
            Empresas
          </Button>
          <Button className="px-6 hover:bg-white" variant="ghost">
            Autónomos
          </Button>
          <Button className="px-6 hover:bg-white" variant="ghost">
            Asesorías
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Básico</CardTitle>
            <CardDescription>
              Simplifica la gestión de tu negocio con las funciones esenciales.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              <span className="text-xl text-gray-500 line-through">29€</span>{" "}
              <br />
              14,5€ / <span className="text-xl text-gray-600">mes</span>{" "}
            </p>
            <p className="mt-1">Durante 3 meses</p>
            <Button className="mt-4  bg-primary w-full">Empieza gratis</Button>
            <ul className="mt-4">
              <li>✔ 1.000 facturas al año</li>
              <li>✔ 100 escaneos gratis al año</li>
              <li>✔ 2 usuarios + tu asesoría</li>
              <li>✔ 5 bancos sincronizados</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>INCLUYE</p>
              <ul className="list-disc pl-5">
                <li>Facturación y gastos</li>
                <li>Cashflow</li>
                <li>CRM</li>
                <li>Gestión de proyectos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Estándar</CardTitle>
            <CardDescription>
              Automatiza tus procesos contables y asigna roles predefinidos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              <span className="text-xl text-gray-500 line-through">29€</span>{" "}
              <br />
              14,5€ / <span className="text-xl text-gray-600">mes</span>{" "}
            </p>
            <p className="mt-1">Durante 3 meses</p>
            <Button className="mt-4  bg-primary w-full">Empieza gratis</Button>
            <ul className="mt-4">
              <li>✔ 3.000 facturas al año</li>
              <li>✔ 300 escaneos gratis al año</li>
              <li>✔ 4 usuarios + tu asesoría</li>
              <li>✔ Bancos sincronizados ilimitados</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>INCLUYE</p>
              <ul className="list-disc pl-5">
                <li>Facturación y gastos</li>
                <li>Cashflow</li>
                <li>CRM</li>
                <li>Gestión de proyectos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Avanzado</CardTitle>
              <Badge
                className="ml-2 text-primary bg-blue-100"
                variant="secondary"
              >
                El más popular
              </Badge>
            </div>
            <CardDescription>
              Profesionaliza tus comunicaciones y personaliza roles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              <span className="text-xl text-gray-500 line-through">29€</span>{" "}
              <br />
              14,5€ / <span className="text-xl text-gray-600">mes</span>{" "}
            </p>
            <p className="mt-1">Durante 3 meses</p>
            <Button className="mt-4  bg-primary w-full">Empieza gratis</Button>
            <ul className="mt-4">
              <li>✔ 10.000 facturas al año</li>
              <li>✔ 800 escaneos gratis al año</li>
              <li>✔ 7 usuarios + tu asesoría</li>
              <li>✔ Bancos sincronizados ilimitados</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>INCLUYE</p>
              <ul className="list-disc pl-5">
                <li>Facturación y gastos</li>
                <li>Cashflow</li>
                <li>CRM</li>
                <li>Gestión de proyectos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>
              Gestiona con facturación ilimitada y un account manager exclusivo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              <span className="text-xl text-gray-500 line-through">29€</span>{" "}
              <br />
              14,5€ / <span className="text-xl text-gray-600">mes</span>{" "}
            </p>
            <p className="mt-1">Durante 3 meses</p>
            <Button className="mt-4 bg-primary w-full">Empieza gratis</Button>
            <ul className="mt-4">
              <li>✔ Facturas ilimitadas</li>
              <li>✔ 1.500 escaneos gratis al año</li>
              <li>✔ 15 usuarios + tu asesoría</li>
              <li>✔ Bancos sincronizados ilimitados</li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm mt-4">
              <p>INCLUYE</p>
              <ul className="list-disc pl-5">
                <li>Facturación y gastos</li>
                <li>Cashflow</li>
                <li>CRM</li>
                <li>Gestión de proyectos</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
