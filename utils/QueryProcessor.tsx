export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "hanahr"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const subMatch = query.match(/What is (\d+) minus (\d+)/);
  if (subMatch) {
    const x: number = parseInt(subMatch[1]);
    const y: number = parseInt(subMatch[2]);
    return (x-y).toString();
  }
  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }
  const largestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestNum) {
    const x: number = parseInt(largestNum[1]);
    const y: number = parseInt(largestNum[2]);
    const z: number = parseInt(largestNum[3]);
    return (Math.max(x, y, z)).toString();
  }


  return ""

}
