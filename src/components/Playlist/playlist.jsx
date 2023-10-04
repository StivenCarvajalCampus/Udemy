import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Playlist() {
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
    <div className="w-full h-screen flex flex-col">
      <NavbarComponent />
      <div className="flex-grow bg-background/10 dark:bg-default-100/50 grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
        <img
          src="src/assets/images/code-music.jpeg"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          className="rounded-lg bg-gray-100"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j",
              "_blank"
            )
          }
        />
        <img
          src="src/assets/images/coding-mode.jpeg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          className="rounded-lg bg-gray-100"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j",
              "_blank"
            )
          }
        />
        <img
          src="src/assets/images/coding-nigth.jpeg"
          alt="Side of walnut card tray with card groove and recessed card area."
          className="rounded-lg bg-gray-100"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j",
              "_blank"
            )
          }
        />
        <img
          src="src/assets/images/piano-music.jpeg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          className="rounded-lg bg-gray-100"
          onClick={() =>
            window.open(
              "https://open.spotify.com/playlist/3Bzoq84W009lnGNYwjDWkI",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}
