import React from 'react';
import FormSubmitBtn from '../ui/buttons/FormSubmitBtn';
import FormCancelBtn from '../ui/buttons/FormCancelBtn';


function ConfirmModel({ heading, subHeading, btnName, isOpen, isLoading, onClose, onConfirm }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-500 bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-1 text-primary-dark font-bold">{heading}</h2>
                    <p className="mb-10 text-primary-dark">{subHeading}</p>
                    <div className='flex gap-5 justify-center'>
                        <FormSubmitBtn onClick={onConfirm} isLoading={isLoading} name={btnName} />
                        <FormCancelBtn onClick={onClose} name="Cancel" />
                    </div>
                </div>
            </div>
        )
    );
}

export default ConfirmModel;