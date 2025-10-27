import React from 'react';

interface EmotionAnalysisResult {
  emotionTag: string;
  totalAmount: number;
}

interface EmotionChartProps {
  analysisData: EmotionAnalysisResult[];
}

const EmotionChart: React.FC<EmotionChartProps> = ({ analysisData }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">감정별 지출 차트 (초안)</h3>
      {analysisData.length === 0 ? (
        <p className="text-gray-600">분석할 감정 데이터가 없습니다.</p>
      ) : (
        <ul className="list-disc list-inside">
          {analysisData.map((data, index) => (
            <li key={index} className="text-gray-800">
              {data.emotionTag}: {data.totalAmount.toLocaleString()}원
            </li>
          ))}
        </ul>
      )}
      <p className="text-sm text-gray-500 mt-4">
        여기에 실제 차트 라이브러리 (예: Chart.js, Recharts)를 사용하여 시각화를 구현할 예정입니다.
      </p>
    </div>
  );
};

export default EmotionChart;
