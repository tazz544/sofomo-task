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
    this.mass = (props.mass) ? parseInt(props.mass.split(',').join(''), 10) : null;
    this.height = (props.height) ? parseInt(props.height.split(',').join(''), 10) : null;
    this.bmi = new Bmi({
      mass: this.mass,
      height: this.height
    });
  }
}
