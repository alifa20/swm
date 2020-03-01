import React, { useState, useEffect } from "react";
import CardTile from "./CardTile";
import { Content, Container, Title } from "./Card.styled";
import { S_IFDIR } from "constants";

type ImageType = {
  id: string;
  download_url: string;
};

const images = [
  { id: 244, download_url: "https://i.picsum.photos/id/244/200/300.jpg" },
  { id: 802, download_url: "https://i.picsum.photos/id/802/200/300.jpg" },
  { id: 1042, download_url: "https://i.picsum.photos/id/1042/200/300.jpg" },
  { id: 827, download_url: "https://i.picsum.photos/id/827/200/300.jpg" },
];

interface Props {
  title?: string;
}

const Card = ({ title }: Props) => {
  return (
    <Container>
      <Content>
        {images.map(image => (
          <CardTile key={image.id} src={image.download_url} />
        ))}
      </Content>
      {title && (
        <Title>
          <img src={require("../../assets/logo.png")} height="100%" /> {title}
        </Title>
      )}
    </Container>
  );
};

export default Card;
