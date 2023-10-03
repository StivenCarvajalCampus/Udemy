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
  }from "@nextui-org/react";
  import { AcmeLogo } from "./AcmeLogo.jsx";
  import { useLocation } from "react-router-dom";
  function NavbarComponent(){
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
    <Navbar className="bg-white">
      <Navbar className="bg-white">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Skillup</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              {userData.avatar ? (
                <Avatar
                  isBordered
                  as="img"
                  className="transition-transform"
                  color="secondary"
                  name={userData.username}
                  size="sm"
                  src={userData.avatar}
                />
              ) : (
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={userData.username}
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              )}
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{userData.username}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </Navbar>
  );
}
        export default NavbarComponent;