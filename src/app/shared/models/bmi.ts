import {BmiCategories, IBmiInputs} from '@app/shared/interfaces';
import {GLOBAL} from '@app/shared/constants/global.constants';

export class Bmi {
  value: number;
  category: BmiCategories;

  constructor({mass, height}: IBmiInputs) {
    this.value = (mass && height) ? (mass / Math.pow(height, 2)) * 10000 : null;
    const matchedBmiRange = GLOBAL.BMI_RANGES.find(range => {
      const conditions: boolean[] = [
        this.value >= range.from
      ];
      if (range.to) {
        conditions.push(this.value < range.to);
      }
      return conditions.every(condition => !!condition);
    });
    this.category = (matchedBmiRange) ? matchedBmiRange.name as BmiCategories : null;
  }
}
