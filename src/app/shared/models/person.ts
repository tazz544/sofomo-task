export class Person {
  name: string;
  birthYear: number;

  constructor(props?: any) { // TODO: types
    this.name = props.name;
    this.birthYear =
      (props.birth_year !== 'unknown')
        ? parseInt(props.birth_year.match(/\d/g).join(''), 10)
        : null;
  }
}
