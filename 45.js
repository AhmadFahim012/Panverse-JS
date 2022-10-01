function car(modal, company, ...arg) {
  var obj = {
    modal,
    company,
    arg,
  };
  console.log(obj);
}

car(2022, "civic", "color: red", "transmission: auto");
