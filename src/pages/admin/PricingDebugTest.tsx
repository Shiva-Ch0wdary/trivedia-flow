import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { pricingAPI } from '@/lib/api';

const PricingDebugTest: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['debug-pricing'],
    queryFn: () => pricingAPI.getAdminPlans(),
  });

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pricing API Debug Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Loading State:</h2>
          <p>{isLoading ? 'Loading...' : 'Not loading'}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Error State:</h2>
          <p>{error ? 'Error: ' + (error as any).message : 'No error'}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Data State:</h2>
          <p>Has data: {!!data ? 'Yes' : 'No'}</p>
          <p>Data type: {typeof data}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Data Path Analysis:</h2>
          <p>plansData exists: {!!data ? 'Yes' : 'No'}</p>
          <p>plansData.data exists: {!!data?.data ? 'Yes' : 'No'}</p>
          <p>plansData.data.data exists: {!!data?.data?.data ? 'Yes' : 'No'}</p>
          <p>plansData.data.data.plans exists: {!!data?.data?.data?.plans ? 'Yes' : 'No'}</p>
          <p>Plans count: {data?.data?.data?.plans?.length || 0}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Raw Response:</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>

        {data?.data?.data?.plans && (
          <div>
            <h2 className="text-lg font-semibold">Plans Summary:</h2>
            <p>Plans count: {data.data.data.plans.length}</p>
            <ul className="list-disc pl-4">
              {data.data.data.plans.map((plan: any) => (
                <li key={plan._id}>
                  {plan.name} - {plan.price} - Active: {plan.isActive ? 'Yes' : 'No'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingDebugTest;
