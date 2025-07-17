import * as yup from 'yup';

export const validationSchemas: { [key: string]: yup.AnySchema } = {
  step1: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    timezone: yup.string().required(),
  }),
  step2: yup.object().shape({
    education: yup.string().required(),
    experience: yup.string().required(),
    skills: yup.string().required(),
    aiExperience: yup.string().required(),
  }),
  step3: yup.object().shape({
    quizAnswers: yup.array().min(1).required(),
    selectedPath: yup.string().required(),
  }),
  step4: yup.object().shape({
    motivation: yup.string().required(),
    availability: yup.string().required(),
    portfolio: yup.mixed(),
  }),
};
