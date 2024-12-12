export interface User {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface BankrollStats {
  month: string;
  balance: number;
  gains: number;
  losses: number;
  stopGreen: number;
  stopLoss: number;
  target: number;
  profit: number;
}