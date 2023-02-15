import { Color } from "./types";

function getColors(): Color[] {
  return [
    {
      id: 1,
      color: "#E57A44",
    },
    {
      id: 2,
      color: "#E3D985",
    },
    {
      id: 3,
      color: "#D6DBB2",
    },
    {
      id: 4,
      color: "#BCD8C1",
    },
    {
      id: 5,
      color: "#41EAD4",
    },
    {
      id: 6,
      color: "#FBFF12",
    },
    {
      id: 7,
      color: "#FF206E",
    },
    {
      id: 8,
      color: "#B8B8F3",
    },
    {
      id: 9,
      color: "#E57A44",
    },
    {
      id: 10,
      color: "#E3D985",
    },
    {
      id: 11,
      color: "#D6DBB2",
    },
    {
      id: 12,
      color: "#BCD8C1",
    },
    {
      id: 13,
      color: "#41EAD4",
    },
    {
      id: 14,
      color: "#FBFF12",
    },
    {
      id: 15,
      color: "#FF206E",
    },
    {
      id: 16,
      color: "#B8B8F3",
    },
  ];
}

export const generateRandomColors = (): Color[] => {
  const colors = getColors();

  let arr: Color[] = [];
  while (1 <= colors.length) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randomIndex];

    arr.push(color);
    colors.splice(randomIndex, 1);
  }

  return arr;
};