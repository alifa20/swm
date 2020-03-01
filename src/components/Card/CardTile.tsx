import React from "react";

interface Props {
  src: string;
}

const CardTile = ({ src }: Props) => (
  <div>
    <img src={src} alt="tile" width="100%" />
  </div>
);

export default CardTile;
