import {BmiCategories} from '@app/shared/interfaces';

export class Person {
  name: string;
  birthYear: number;
  bmiCategory: BmiCategories;

  constructor(props?: any) { // TODO: types
    console.log(props);
    this.name = props.name;
    this.birthYear =
      (props.birth_year !== 'unknown')
        ? parseInt(props.birth_year.match(/\d/g).join(''), 10)
        : null;
    // if (props.mass !== 'unknown' && props.height !== 'unknown') {
    //   this.bmi = parseInt(props.mass, 10) / Math.sqrt(parseInt(props.height, 10));
    // } else {
    //   this.bmi = null;
    // }
  }
}
