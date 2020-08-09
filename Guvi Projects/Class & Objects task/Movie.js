class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(arrObj) {
    const PGobj = arrObj.filter(
      (input) => input.rating.includes("PG") === true
    );
    return PGobj;
  }
}

const kgf = new Movie("KGF", "AVM", "PG13");
const master = new Movie("Master", "Thirumalai Brothers", "RG");
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(Movie.getPG([kgf, master, casinoRoyale]));
