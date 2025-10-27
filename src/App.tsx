import React, { useState, useEffect } from 'react';
import ExpenseList, { Expense } from './components/ExpenseList';
import useEmotionAnalysis from './hooks/useEmotionAnalysis';
import EmotionChart from './components/EmotionChart'; // Import EmotionChart

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const emotionAnalysis = useEmotionAnalysis(); // Use the custom hook

  useEffect(() => {
    // Load expenses from LocalStorage
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      try {
        const parsedExpenses: Expense[] = JSON.parse(storedExpenses);
        setExpenses(parsedExpenses);
      } catch (error) {
        console.error("Failed to parse expenses from LocalStorage", error);
        setExpenses([]);
      }
    }
  }, []); // Run once on component mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Emotion-Driven Ledger</h1>
      <ExpenseList expenses={expenses} />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">감정별 지출 분석</h2>
        <EmotionChart analysisData={emotionAnalysis} /> {/* Render EmotionChart */}
      </div>
    </div>
  );
};

export default App;