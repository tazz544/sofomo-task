import {Bmi} from '@app/shared/models/bmi';
import {IRawPerson} from '@app/shared/interfaces';

export class Person {
  birthYear: number;
  height: number;
  name: string;
  mass: number;
  bmi: Bmi;

  constructor(props: IRawPerson) {
    Object.keys(props).forEach(
      key => props[key] = (props[key] === 'unknown') ? null : props[key]
    );
    this.name = props.name;
    this.birthYear =
      (props.birth_year)
        ? parseInt(props.birth_year.match(/\d/g).join(''), 10)
        : null;
    this.mass = parseInt(props.mass, 10);
    this.height = parseInt(props.height, 10);
    this.bmi = new Bmi({
      mass: this.mass,
      height: this.height
    });
  }
}
