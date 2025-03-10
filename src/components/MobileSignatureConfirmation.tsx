import React from 'react';
import { CheckCircle, Loader2 } from 'lucide-react'; // Import Loader2

interface MobileSignatureConfirmationProps {
  isSaving: boolean;
}

export const MobileSignatureConfirmation: React.FC<MobileSignatureConfirmationProps> = ({ isSaving }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4">
      {isSaving ? (
        <>
          <Loader2 className="h-16 w-16 text-blue-600 animate-spin mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Saving...</h2>
          <p className="text-gray-600 text-center">Please wait while we save your signature.</p>
        </>
      ) : (
        <>
          <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 text-center">
            Your signature has been submitted. Please return to your computer screen to continue.
          </p>
        </>
      )}
    </div>
  );
};
