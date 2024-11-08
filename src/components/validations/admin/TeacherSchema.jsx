import * as yup from "yup";

const TeacherSchema = (isUpdate) => yup.object().shape({
    profile: isUpdate ? yup.mixed() : yup.mixed().required('Image is required'),
    name: yup.string().required('Name is required'),
    age: yup.number().positive('Age must be a positive number').required('Age is required'),
    college: yup.string().required('University is required'),
    description: yup.string().required('Description is required'),
});

export default TeacherSchema;