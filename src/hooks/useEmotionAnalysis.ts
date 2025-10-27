import { useState, useEffect } from 'react';
import { Expense } from '../components/ExpenseList'; // Reusing the Expense interface

interface EmotionAnalysisResult {
  emotionTag: string;
  totalAmount: number;
}

const useEmotionAnalysis = (): EmotionAnalysisResult[] => {
  const [analysis, setAnalysis] = useState<EmotionAnalysisResult[]>([]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      try {
        const expenses: Expense[] = JSON.parse(storedExpenses);
        const emotionMap = new Map<string, number>();

        expenses.forEach(expense => {
          const currentTotal = emotionMap.get(expense.emotion) || 0;
          emotionMap.set(expense.emotion, currentTotal + expense.amount);
        });

        const result: EmotionAnalysisResult[] = Array.from(emotionMap.entries()).map(([emotionTag, totalAmount]) => ({
          emotionTag,
          totalAmount,
        }));
        setAnalysis(result);
      } catch (error) {
        console.error("Failed to parse expenses from LocalStorage", error);
        setAnalysis([]);
      }
    } else {
      setAnalysis([]);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return analysis;
};

export default useEmotionAnalysis;
