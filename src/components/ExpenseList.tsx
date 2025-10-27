import React from 'react';

// Define the Expense interface
export interface Expense {
  id: string;
  date: string;
  item: string;
  amount: number;
  emotion: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              날짜
            </th>
            <th scope="col" className="py-3 px-6">
              항목
            </th>
            <th scope="col" className="py-3 px-6">
              금액
            </th>
            <th scope="col" className="py-3 px-6">
              감정 태그
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td colSpan={4} className="py-4 px-6 text-center">
                지출 내역이 없습니다.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">
                  {expense.date}
                </td>
                <td className="py-4 px-6">
                  {expense.item}
                </td>
                <td className="py-4 px-6">
                  {expense.amount.toLocaleString()}원
                </td>
                <td className="py-4 px-6">
                  {expense.emotion}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
