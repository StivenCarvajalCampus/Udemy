  import React, { useEffect, useState } from "react";
  import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Card,
    CardBody,
    CardHeader,
    Image,
  } from "@nextui-org/react";
  import { useLocation } from "react-router-dom";
  import CardComponent from "../Cardcomponent/Cardcomponent.jsx";
  import NavbarComponent from "../NavbarComponent/NavbarComponent.jsx";

  export default function Dashboard() {
   

    return (
      <div className="w-full">
        <NavbarComponent/>

        <div className="flex flex-wrap ">
          
          <CardComponent 
          title="Cantidad de videos"
          subdescription="12 Tracks"
          description="React"
          imageSrc="src/assets/images/react.jpg"
          />
          <CardComponent
          title="Cantidad de videos"
          subdescription="12 Tracks"
          description="React"
          imageSrc="src/assets/images/git.jpg"
          />
          
        </div>
      </div>
    );
  }
