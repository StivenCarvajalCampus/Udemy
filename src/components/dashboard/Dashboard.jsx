import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";
import React, { useEffect, useState } from "react";
const features = [
  { name: "Cursos Disponibles", description: "En este aplicativo encontraras de momento los cursos de ", 
    namespotify: "Playlist recomendadas para mayor concentracion", descriptionspotify: "Te dejamos unas playlist recomendadas "

},
  
];
import { Link, useLocation } from "react-router-dom";

import {Button} from "@nextui-org/react";
import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
export default function Dashboard() {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // Realizar una solicitud para obtener los datos del usuario
    if (userId) {
      fetch(`http://127.25.25.26:3302/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUserData(data); // Guardar los datos del usuario en el estado
        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario: ", error);
        });
    }
  }, [userId]);
  return (
    <>
      <div className="w-full grid gap-4 ">
        <NavbarComponent />

        <div className="py-4 px-2 bg-background/10 dark:bg-default-100/50 mt-4 flex justify-center">
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 text-white">
            <div>
              <h1 className="flex justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
                Bienvenido Usuario {userData.username}
              </h1>
              <p className="flex justify-center mt-4 text-white-500">
                En este aplicativo encontraras diferentes cursos que te ayudaran
                a fortalecer tus skills adquiridas en campus para llevar tu
                avance a otro nivel.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 text-white">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-white-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-white-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="src/assets/images/git.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="src/assets/images/js.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="src/assets/images/react.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <img
                src="src/assets/images/reactdecero.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
            <div className="flex justify-center p-4">
              <Link to={"/studentinit"}>
              <Button
                color="primary"
                variant="ghost"
                className="flex justify-center"
              >
                Registrate en un curso
              </Button>
              </Link>
            </div>
            <div className="flex justify-center p-4">
              <Link to={"/playlist"}>
              <Button
                color="primary"
                variant="ghost"
                className="flex justify-center"
              >
                Recomendaciones
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
