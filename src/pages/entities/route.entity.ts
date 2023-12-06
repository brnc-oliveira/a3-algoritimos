import EVehicles, { EVehiclesTranslate } from '../enums/EVehicles.enum';

export default class Route {
  constructor(
    public startPoint: string,
    public destiny: string,
    public vehicleType: string,
    public distance: number,
    public totalTime: number,
    public consumption: number,
    public consumptionCost: number,
    public food: number,
    public foodCost: number,
    public tolls: number,
    public tollsCost: number,
    public totalCost: number,
    public route: Array<string>
  ) {}

  static make(
    data: any,
    startPoint: string,
    destiny: string,
    vehicleType: EVehicles
  ): Route {
    const vehiclesList = [
      {
        type: 'moto',
        consumption: 30,
        maxSpeed: 110,
        axleQuantity: 1,
        tollsCost: 1.25,
      },
      {
        type: 'carro',
        consumption: 12,
        maxSpeed: 110,
        axleQuantity: 2,
        tollsCost: 2.5,
      },
      {
        type: 'caminhao',
        consumption: 2.5,
        maxSpeed: 90,
        axleQuantity: 4,
        tollsCost: 5,
      },
      {
        type: 'onibus',
        consumption: 3.5,
        maxSpeed: 90,
        axleQuantity: 6,
        tollsCost: 7.5,
      },
      {
        type: 'micro-onibus',
        consumption: 6,
        maxSpeed: 90,
        axleQuantity: 2,
        tollsCost: 2.5,
      },
    ];

    const vehicles: any = vehiclesList.filter(
      (vehicle) => vehicle.type === vehicleType
    );

    const vehicle =
      EVehiclesTranslate[vehicleType as keyof typeof EVehiclesTranslate];

    const distance = Math.floor(Number(data.distancia));

    const tolls = Number(data.pedagios);

    const tollsCost = vehicles[0].axleQuantity * 1.5 * tolls;

    const consumption = Math.floor(distance / vehicles[0].consumption);

    const consumptionCost = Math.floor(
      (distance / vehicles[0].consumption) * 5.4
    );

    const totalTime = Math.floor((distance / vehicles[0].maxSpeed) * 60);

    const food = Math.floor(distance / 50);

    const foodCost = food * 30;

    const route = data.rota.trim().split(' -> ');

    const totalCost = Math.floor(foodCost + consumptionCost + tollsCost);

    return new Route(
      startPoint,
      destiny,
      vehicle,
      distance,
      totalTime,
      consumption,
      consumptionCost,
      food,
      foodCost,
      tolls,
      tollsCost,
      totalCost,
      route
    );
  }
}
