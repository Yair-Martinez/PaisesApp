export interface IPais {
  alpha3Code: string,
  name: string,
  nativeName: string,
  capital: string,
  region: string,
  subregion: string,
  population: string,
  flags: {
    png: string
    svg: string
  },
  languages: [{
    name: string,
  }],
  currencies: [{
    code: string,
    name: string,
  }],
  topLevelDomain: string[],
  borders: string[],
}