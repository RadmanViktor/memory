export type Color = {
  id: number;
  color: string;
};

export interface ICard {
  id: number;
  color: string;
  active: boolean;
  removed: boolean;
}

export type CardProps = {
  id: number;
  color: string;
  removed: boolean;
  isActive: boolean;
  setCards: (cards: ICard[]) => void;
  cards: ICard[];
};

export type Player = {
  id: number;
  name: string;
  points: number;
  active: boolean;
};