/*
  Calculates minutes to read
*/
export const calculateMinutesToRead = (content: string) =>
  Math.round(content.split(" ").length / 200);
