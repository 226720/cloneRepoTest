export function calculateSimpleInterest(
  principal,
  rateOfInterest,
  numberOfYears
) {
  var interest = (principal * rateOfInterest * numberOfYears) / 100;
  return interest;
}
