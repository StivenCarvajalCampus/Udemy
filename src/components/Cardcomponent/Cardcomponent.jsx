import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

function CardComponent({ title, subdescription, description, imageSrc,Trainer }) {
  return (
    <div className="flex-wrap max-w-md m-4">
      {" "}
      {/* Añadimos margen aquí */}
      <Card
        isBlurred
        className="py-4 px-2 bg-background/10 dark:bg-default-100/50 max-w-[610px]  "
        shadow="sm"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold text-white">{title}</p>
          <small className="text-default-500 text-white">{subdescription}</small>
          <h4 className="font-bold text-large text-white">{description}</h4>
          <small className="text-default-500 text-white">{Trainer}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageSrc}
            width={270}
            onClick="Hola"
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComponent;
