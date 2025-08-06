import {Proyecto } from "@/data/data";

export const getRandomItems = (arr: Proyecto[], n: number) => {
    const arrayCopy = [...arr];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy.slice(0, n);
}