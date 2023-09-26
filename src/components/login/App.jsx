import React from "react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";

export default function App() {
  const login = async () => {
    try {
      window.location.href = "http://127.25.25.26:3302/login";
    } catch (error) { /* empty */ }
  } 
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute left-0 top-180">
        <Image src="src/assets/images/hi.png" width={200} height={200} />
      </div>
      <Card
        isBlurred
        className="py-4 px-2 bg-background/10 dark:bg-default-100/50 max-w-[610px] grid grid-cols-2 gap-2 h-1/2 "
        shadow="sm"
      >
        <div className="flex flex-col justify-center items-center ">
          <CardHeader className="pb-0 px-10 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-teal-50">Login</p>
            <h4 className="font-bold text-large text-teal-50">
              Skillup Education
            </h4>
          </CardHeader>
          <div className="flex justify-center items-center m-2">
            <video className="h-full" autoPlay loop muted controls={false}>
              <source src="src/assets/images/Designer.mp4" type="video/mp4" />
              Tu navegador no admite la reproducción de video.
            </video>
          </div>
          <Button
            className="w-24 max-h-full mt-4 cursor-progress bg-indigo-500 shadow-lg shadow-indigo-500/50 outline-blue-500"
            onClick={login}
          >
            Login Discord
          </Button>
        </div>
        <div className="grid grid-col-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-full"
            src="src/assets/images/derecha.png"
          />
        </div>
      </Card>
      <div className="absolute right-0 top-180">
        <Image src="src/assets/images/sleep.png" width={180} height={180} />
      </div>
    </div>
  );
}
