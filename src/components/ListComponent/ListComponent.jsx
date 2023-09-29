// DropdownList.jsx
import React from "react";
import { Dropdown } from "@nextui-org/react";

const ListComponent = ({ options, onSelect }) => {
  return (
    <Dropdown
      options={options}
      onSelect={(item) => onSelect(item)}
      placeholder="Selecciona una opción"
    />
  );
};

export default ListComponent;
