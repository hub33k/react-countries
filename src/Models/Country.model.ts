interface CountryLanguages {
  name: string;
}

export default interface Country {
  name: string;
  emoji: string;
  languages: Array<CountryLanguages>;
}
