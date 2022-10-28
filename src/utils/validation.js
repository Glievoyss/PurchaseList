export const validationSearch = value => {
  return value[0] === ' ' ? true : /[\\(\\)#$\\^*+\\[\]\\|\\?]/.test(value);
};

export const validationNumber = value =>
  /[a-zA-Z_~`\\(\\)!#@$%\\^&*+=\-\\[\]\\';,.\\/{}|\\":<>\\?]/.test(value);

export const validationNumberAndLetters = value =>
  /[a-zA-Z_~`\\\w\s\\1234567890(\\)!#@$%\\^&*+=\-\\[\]\\';,.\\/{}|\\":<>\\?]/.test(
    value
  );

export const validationNoSpecialCharacters = (inputValue, maxLength) => {
  if (
    ((maxLength ? inputValue.length < maxLength + 1 : true) &&
      !inputValue.replace(/[a-zA-Z0-9-_\s]/gi, '') &&
      `${inputValue.slice(0, 1)}` !== ' ') ||
    inputValue === ''
  ) {
    return true;
  } else {
    return false;
  }
};
