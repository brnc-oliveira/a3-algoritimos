import ECity from '../enums/ECity.enum';
import EVehicles from '../enums/EVehicles.enum';

export default interface ListRouteDTO {
  vehicle: EVehicles;
  startPoint: ECity;
  destiny: ECity;
}
