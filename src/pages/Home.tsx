import React from 'react';
import { TrendingUp, Shield, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sports Betting Management Platform
        </h1>
        <p className="text-xl text-gray-600">
          Take control of your betting strategy with our professional management tools
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Track Performance</h3>
          <p className="text-gray-600">
            Monitor your betting performance with detailed analytics and insights
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
          <p className="text-gray-600">
            Set stop-loss and take-profit levels to protect your bankroll
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <BarChart className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
          <p className="text-gray-600">
            Get detailed reports and visualizations of your betting history
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Home;