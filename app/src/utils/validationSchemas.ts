import * as yup from "yup";

export const validationSchemas = {
  step1: yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    timezone: yup.string().required("Timezone is required"),
  }),

  step2: yup.object({
    education: yup.string().required("Education is required"),
    experience: yup.string().required("Experience is required"),
    skills: yup.string().required("Skills are required"),
    aiExperience: yup.string().required("AI experience is required"),
  }),

  step3: yup.object({
    quizAnswers: yup
      .array()
      .of(
        yup.object({
          questionId: yup.string().required(),
          answer: yup.string().required("Answer is required"),
        })
      )
      .min(1, "Answer all quiz questions"),
  }),

  step4: yup.object({
    portfolio: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required(),
          url: yup.string().url().required(),
        })
      )
      .min(1, "Upload at least one file"),
    motivation: yup
      .string()
      .min(20, "Write at least 20 characters")
      .required("Motivation is required"),
    availability: yup.string().required("Availability is required"),
  }),

  step5: yup.object({}),
};
