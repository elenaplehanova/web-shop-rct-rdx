export const required = {
    required: "Поле обязательно к заполнению",
};

export const passwordRules = {
    ...required,
    minLength: {
        value: 6,
        message: "Минимум 6 символов",
    },
};

export const emailRules = {
    ...required,
    minLength: {
        value: 5,
        message: "Минимум 5 символов",
    },
};
