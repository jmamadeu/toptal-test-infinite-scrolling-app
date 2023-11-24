export function encode(originalString: string) {
  const encodedString = Buffer.from(originalString).toString("base64");

  return encodedString;
}

export function decode(encodedString: string) {
  const decodedString = Buffer.from(encodedString, "base64").toString("utf-8");

  return decodedString;
}
