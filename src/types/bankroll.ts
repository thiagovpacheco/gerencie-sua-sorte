export interface BankrollStats {
  saldoBanca: number;
  ganhos: number;
  perdas: number;
  stopGreen: number;
  stopLoss: number;
  meta: number;
  lucro: number;
}

export interface PerformanceData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}