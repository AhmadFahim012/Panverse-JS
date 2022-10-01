const make_great = () => {
  const magician = ["hassan", "jamil", "arif"]; //original unchanged array
  console.log(magician);
  for (let i = 0; i < magician.length; i++) {
    console.log("The Great " + magician[i]); // The great
  }
};

make_great();
