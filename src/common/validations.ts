import * as Yup from "yup";

export const noteValidation = Yup.object({
    newName: Yup.string()
        .min(5)
        .max(30),
    generation: Yup.string()
        .min(10)
        .max(500),
})