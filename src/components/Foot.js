import React from "react";

export default function Foot() {
  return (
      <div className="foot">
        <div className="grid grid-cols-2 gap-2 lg:w-1/4 md:w-1/4 sm:w-full mx-auto text-sm">
          <p>Y-Tunnus 3222690-1</p>
          <a className="tarmo" href="https://urrio.fi">
            © Tarmo
          </a>
        </div>
      </div>
  );
}
