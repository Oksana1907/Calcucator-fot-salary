/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function render() {
  const salary = document.getElementById('salary').value;
  const payrollPreparation = (a) => Math.floor(a * 0.805);
  let totalMoney = payrollPreparation(salary);
  if (salary > 0) {
    const text = `
        На руки вы сможете получить ${totalMoney} грн.
        `;
    totalMoney = document.getElementById('result').innerHTML = text;
  } else {
    document.getElementById('result').insertAdjacentHTML(
      'beforeend',
      `
        <div> Поле не должно быть пустым </div>
      `,
    );
  }
}
