let outsideScope = 'OutsideScope';
function printMyName() {
  var myName = 'Madhu Chakravarthy';
  console.log(myName);
  console.log(outsideScope);
  const a = 5;
  const b = 6;
  if (b > a) {
    let inside = 'InsideScope';
    console.log(inside);
  }
  // let and const only available inisde the scope
  //console.log(inside); Not available
}
printMyName();
