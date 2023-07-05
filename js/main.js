const cell = document.querySelector("#cell");
const firstName = document.querySelector("#firstName");
class Regex {
  static cleanCell(cell) {
    return cell.replace(/\D/g, "");
  }

  static formatCell(cell) {
    return cell.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }

  static firstNameVerif(firstName) {
    return firstName.replace(/\W|\d/g, "");
  }
}

cell.addEventListener("input", () => {
  cell.value = Regex.cleanCell(cell.value);
  cell.value = Regex.formatCell(cell.value);
});
firstName.addEventListener("input", () => {
  firstName.value = Regex.firstNameVerif(firstName.value);
});
