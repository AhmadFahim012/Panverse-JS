function getNumberWithOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((n) =>
  console.log(n + " -> " + getNumberWithOrdinal(n))
);
