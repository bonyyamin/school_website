import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeeStructure = () => {
  const [selectedGrade, setSelectedGrade] = useState('elementary');

  const feeStructure = {
    elementary: {
      title: 'Elementary (K-5)',
      tuition: 12500,
      fees: [
        { name: 'Registration Fee', amount: 500, type: 'one-time' },
        { name: 'Technology Fee', amount: 300, type: 'annual' },
        { name: 'Activity Fee', amount: 200, type: 'annual' },
        { name: 'Library Fee', amount: 150, type: 'annual' },
        { name: 'Lunch Program', amount: 1200, type: 'annual', optional: true }
      ]
    },
    middle: {
      title: 'Middle School (6-8)',
      tuition: 14500,
      fees: [
        { name: 'Registration Fee', amount: 500, type: 'one-time' },
        { name: 'Technology Fee', amount: 400, type: 'annual' },
        { name: 'Activity Fee', amount: 300, type: 'annual' },
        { name: 'Library Fee', amount: 200, type: 'annual' },
        { name: 'Science Lab Fee', amount: 250, type: 'annual' },
        { name: 'Lunch Program', amount: 1200, type: 'annual', optional: true }
      ]
    },
    high: {
      title: 'High School (9-12)',
      tuition: 16500,
      fees: [
        { name: 'Registration Fee', amount: 500, type: 'one-time' },
        { name: 'Technology Fee', amount: 500, type: 'annual' },
        { name: 'Activity Fee', amount: 400, type: 'annual' },
        { name: 'Library Fee', amount: 250, type: 'annual' },
        { name: 'Science Lab Fee', amount: 350, type: 'annual' },
        { name: 'AP Exam Fee', amount: 300, type: 'annual', optional: true },
        { name: 'Lunch Program', amount: 1200, type: 'annual', optional: true }
      ]
    }
  };

  const paymentPlans = [
    {
      name: 'Annual Payment',
      description: 'Pay full amount upfront',
      discount: '5% discount',
      dueDate: 'August 1st'
    },
    {
      name: 'Semester Payment',
      description: 'Pay in two installments',
      discount: '2% discount',
      dueDate: 'August 1st & January 1st'
    },
    {
      name: 'Monthly Payment',
      description: 'Pay in 10 monthly installments',
      discount: 'No discount',
      dueDate: '1st of each month (Aug-May)'
    }
  ];

  const currentGrade = feeStructure[selectedGrade];
  const totalMandatoryFees = currentGrade.fees
    .filter(fee => !fee.optional)
    .reduce((sum, fee) => sum + fee.amount, 0);
  const totalOptionalFees = currentGrade.fees
    .filter(fee => fee.optional)
    .reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fee Structure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with flexible payment options to support your family's needs
          </p>
        </div>

        {/* Grade Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(feeStructure).map(([key, grade]) => (
            <button
              key={key}
              onClick={() => setSelectedGrade(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedGrade === key
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {grade.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fee Breakdown */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="DollarSign" size={24} className="mr-2 text-green-600" />
              {currentGrade.title} - Fee Breakdown
            </h3>

            <div className="space-y-4">
              {/* Tuition */}
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">Annual Tuition</span>
                  <p className="text-sm text-gray-600">Core academic program</p>
                </div>
                <span className="text-xl font-bold text-blue-800">
                  ${currentGrade.tuition.toLocaleString()}
                </span>
              </div>

              {/* Mandatory Fees */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mt-4">Mandatory Fees</h4>
                {currentGrade.fees.filter(fee => !fee.optional).map((fee, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div>
                      <span className="text-gray-900">{fee.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({fee.type})</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      ${fee.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Optional Fees */}
              {currentGrade.fees.some(fee => fee.optional) && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mt-4">Optional Fees</h4>
                  {currentGrade.fees.filter(fee => fee.optional).map((fee, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div>
                        <span className="text-gray-900">{fee.name}</span>
                        <span className="text-sm text-gray-500 ml-2">({fee.type})</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded ml-2">
                          Optional
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">
                        ${fee.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Total */}
              <div className="border-t-2 border-gray-300 pt-4 mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Total (Mandatory)
                  </span>
                  <span className="text-2xl font-bold text-blue-800">
                    ${(currentGrade.tuition + totalMandatoryFees).toLocaleString()}
                  </span>
                </div>
                {totalOptionalFees > 0 && (
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>+ Optional fees (if selected)</span>
                    <span>${totalOptionalFees.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Plans */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="CreditCard" size={24} className="mr-2 text-blue-600" />
              Payment Plans
            </h3>

            <div className="space-y-4">
              {paymentPlans.map((plan, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                    <span className={`text-sm px-2 py-1 rounded ${
                      plan.discount.includes('5%') ? 'bg-green-100 text-green-800' :
                      plan.discount.includes('2%') ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{plan.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    Due: {plan.dueDate}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Icon name="Info" size={16} className="mr-2" />
                Additional Information
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Late payment fee: $50 after 10-day grace period</li>
                <li>• Returned check fee: $35</li>
                <li>• Payment methods: Check, ACH, Credit Card</li>
                <li>• Sibling discount: 10% off second child, 15% off third+</li>
              </ul>
            </div>

            <div className="mt-6">
              <Button 
                variant="default" 
                fullWidth
                className="bg-blue-800 hover:bg-blue-900"
                iconName="Download"
                iconPosition="left"
              >
                Download Fee Schedule PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;