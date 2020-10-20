const sum_pairs = (ints, s) => {
  const result = [];
  for (const i1 of ints) {
    const a = [...ints];
    a.splice(ints.indexOf(i1), 1);
    for (const i2 of a) {
      if (i1 + i2 === s) {
        console.log([i1, i2]);
        return [i1, i2];
      }
    }
  }
};
