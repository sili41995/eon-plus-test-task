const enum FormErrorMessages {
  loginReqErr = 'Login field must be filled inе',
  passwordReqErr = 'Password field must be filled inе',
  phoneReqErr = 'Phone field must be filled in',
  emailReqErr = 'Email field must be filled in',
  emailRegExpErr = 'Email may contain only Latin letters, numbers, dots, hyphens, underscores, and the symbols %, +',
  phoneRegExpErr = "Phone must start with '+' and contain between 10 and 15 digits.",
}

export default FormErrorMessages;
