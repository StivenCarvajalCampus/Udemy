// CardComponent.js
import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Image,
  }from "@nextui-org/react";

function CardComponent({ title,subdescription, description, imageSrc }) {
  return (
    <div className="mt-4 mx-auto max-w-md m-4">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start m-4">
          <p className="text-tiny uppercase font-bold">
            {title}
          </p>
          <small className="text-default-500">{subdescription}</small>
          <h4 className="font-bold text-large">{description}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageSrc}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComponent;
