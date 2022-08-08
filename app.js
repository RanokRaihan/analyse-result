const source = [
  `NU H3 Result: MST. AMENA KHATUN;Result: P;Marks: 232701=B ,232703=A- ,232705=B ,232707=C+ ,232709=A ,232711=B- ,232713=A+ ,232714=A+. Powered by Teletalk.`,
  `NU H3 Result: MD. RANOK RAIHAN;Result: P;Marks: 232701=B- ,232703=B ,232705=B ,232707=Fail  ,232709=B+ ,232711=B ,232713=A+ ,232714=A+. Powered by Teletalk.`,
  `NU H3 Result: MD. KHOKON MOSTASIR;Result: P;Marks: 232701=C ,232703=C+ ,232705=B+ ,232707=C ,232709=C ,232711=D ,232713=A ,232714=A+. Powered by Teletalk.`,
  `NU H3 Result: MD. ROKNUZZAMAN;Result: P;Marks: 232701=B+ ,232703=B ,232705=B- ,232707=C ,232709=B- ,232711=B- ,232713=A ,232714=A. Powered by Teletalk.`,
  `NU H3 Result: MD SHAMIM REZA;Result: P;Marks: 232701=Fail  ,232703=A- ,232705=B- ,232707=D ,232709=B- ,232711=C ,232713=B+ ,232714=A-. Powered by Teletalk.`,
  `NU H3 Result: MD. TOUHIDUL ISLAM;Result: P;Marks: 232701=B ,232703=A- ,232705=A ,232707=D ,232709=B- ,232711=B- ,232713=B+ ,232714=A+. Powered by Teletalk.`,
  `NU H3 Result: MST SHAHINUR AKTER TIYA;Result: P;Marks: 232701=B+ ,232703=B ,232705=B- ,232707=C ,232709=B ,232711=B- ,232713=A+ ,232714=A. Powered by Teletalk.`,
];

// main function

const getData = (string) => {
  const examTitle = string.split(":")[0];
  const name = string.split("Result:")[1].replace(";", "");
  const result = string.split("Result:")[2].split("Marks:")[1].replace(". Powered by Teletalk.", "").split(",");
  const resultObj = result.map((singleResult) => ({
    subCode: singleResult.trim().split("=")[0],
    grade: singleResult.trim().split("=")[1],
  }));
  return {
    examTitle,
    name,
    result: resultObj,
  };
};

//call the function

const sortedResult = source.map((singleRes) => getData(singleRes));

// console.log(sortedResult);
//render result
const tableBody = document.querySelector("tbody");

const renderResult = (arr) => {
  tableBody.innerHTML = "";
  arr.forEach((singleResult) => {
    const grades = singleResult.result.map((singleGrade) => `<td>${singleGrade.grade}</td>`);
    const name = `<td>${singleResult.name}</td>`;
    tableBody.innerHTML = tableBody.innerHTML + name + grades.join(" ");
    // console.log();
  });
};

renderResult(sortedResult);
