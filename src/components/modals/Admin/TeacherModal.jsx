import React from 'react';
import TeacherForm from '../../forms/Admin/TeacherForm';

function TeacherModal({ isOpen, onClose, initialData }) {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-primary-500 bg-opacity-50">
                <div className="w-[90%] h-[90%] overflow-auto bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl mb-5 text-Primary-dark font-bold">{initialData ? "Update Teacher" : "Add Teacher"}</h2>
                    <TeacherForm
                        onClose={onClose}
                        isUpdate={initialData ? true : false}
                        initialData={initialData}
                    />
                </div>
            </div>
        )
    );
}

export default TeacherModal;