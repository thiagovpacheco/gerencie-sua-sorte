import React, { useState } from 'react';
import { DollarSign, TrendingUp, Target, Ban, Check, Flag, ArrowUp, ArrowDown } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import MonthlyPerformanceChart from '../components/MonthlyPerformanceChart';
import { unparse } from 'papaparse';
import type { BankrollStats, PerformanceData } from '../types/bankroll';

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('2024-03');
  const [targetReached, setTargetReached] = useState<boolean>(false);

  const bankrollStats: BankrollStats = {
    saldoBanca: 5000,
    ganhos: 1200,
    perdas: 450,
    stopGreen: 1500,
    stopLoss: 1000,
    meta: 2000,
    lucro: 750
  };

  const performanceData: PerformanceData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Lucro',
        data: [500, 800, 750, 1200, 1000, 1500],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)'
      },
      {
        label: 'Perdas',
        data: [200, 300, 450, 250, 400, 300],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)'
      }
    ]
  };

  const handleExportCSV = () => {
    const data = [
      {
        mes: selectedMonth,
        saldo: bankrollStats.saldoBanca,
        ganhos: bankrollStats.ganhos,
        perdas: bankrollStats.perdas,
        lucro: bankrollStats.lucro,
        stopGreen: bankrollStats.stopGreen,
        stopLoss: bankrollStats.stopLoss,
        meta: bankrollStats.meta
      }
    ];
    
    const csv = unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `relatorio_${selectedMonth}.csv`;
    link.click();
  };

  const handleTargetReached = () => {
    setTargetReached(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Gerenciamento de Banca</h1>
          <div className="flex gap-4">
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
            />
            <button
              onClick={handleExportCSV}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Flag className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Saldo da Banca"
            value={`R$ ${bankrollStats.saldoBanca.toLocaleString()}`}
            icon={DollarSign}
            bgColor="bg-emerald-600"
            textColor="text-emerald-200"
          />
          <StatsCard
            title="Ganhos"
            value={`R$ ${bankrollStats.ganhos.toLocaleString()}`}
            icon={ArrowUp}
            bgColor="bg-blue-600"
            textColor="text-blue-200"
          />
          <StatsCard
            title="Perdas"
            value={`R$ ${bankrollStats.perdas.toLocaleString()}`}
            icon={ArrowDown}
            bgColor="bg-red-600"
            textColor="text-red-200"
          />
          <StatsCard
            title="Lucro"
            value={`R$ ${bankrollStats.lucro.toLocaleString()}`}
            icon={TrendingUp}
            bgColor="bg-purple-600"
            textColor="text-purple-200"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Desempenho Mensal</h2>
            <MonthlyPerformanceChart data={performanceData} />
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Resumo do Mês</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <span>Stop Green:</span>
                <span className="text-emerald-400">R$ {bankrollStats.stopGreen.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <span>Stop Loss:</span>
                <span className="text-red-400">R$ {bankrollStats.stopLoss.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <span>Meta:</span>
                <span className="text-blue-400">R$ {bankrollStats.meta.toLocaleString()}</span>
              </div>
              <button
                onClick={handleTargetReached}
                disabled={targetReached}
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
                  targetReached
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {targetReached ? (
                  <>
                    <Check className="w-5 h-5" />
                    Meta Atingida
                  </>
                ) : (
                  <>
                    <Target className="w-5 h-5" />
                    Registrar Meta Atingida
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;