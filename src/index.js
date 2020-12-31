import './styles.css';

// function digital_root(n) {
//   if (n.length > 1) {
//     console.log(n);
//     // n.map((value, index) => {
//     //   console.log(value);
//     //   console.log(index);
//     // });
//   }
// }

// const proba = digital_root(164);
// console.log(proba);

/// Задача с Codewars

function digitalRoot(namber) {
  const Namber = toString(namber);
  const stringValue = Namber.length;
  console.log(stringValue);
  if (stringValue > 1) {
    for (let i = 0; i < stringValue; i += 1) {
      console.log(namber);
    }
  }
}

digitalRoot(2);
