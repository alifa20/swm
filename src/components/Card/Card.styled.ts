import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 30%;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  align-items: center;
  font-size: 4vw;
`;
