const generatePassword = () => {
  const characterSets = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()_+-=[]{}|;:,.<>?",
  ];

  const getCharacter = (set) =>
    set.charAt(Math.floor(Math.random() * set.length));

  const passwordLength = Math.floor(Math.random() * (20 - 8 + 1)) + 8;

  return Array.from({ length: passwordLength }, () =>
    getCharacter(
      characterSets[Math.floor(Math.random() * characterSets.length)]
    )
  ).join("");
};

const password = generatePassword();

console.log(password);
