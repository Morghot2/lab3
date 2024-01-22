const convertToBase64 = (text) => {
  return Buffer.from(text).toString("base64");
};

console.log(convertToBase64("Ala ma kota"));
