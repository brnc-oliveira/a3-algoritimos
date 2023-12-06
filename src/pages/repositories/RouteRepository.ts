import Repository from '../../core/http/Repository';
import ListRouteDTO from '../dtos/ListRouteDTO.dto';
import Route from '../entities/route.entity';

export default class RouteRepository extends Repository {
  public async getRoute(params: ListRouteDTO): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    };

    const queryParams = new URLSearchParams({
      origem: params.startPoint,
      destino: params.destiny,
      tipoCalculo: 'caminho',
      tipoVeiculo: params.vehicle,
    });

    const url = `/municipios/buscar-rota?${queryParams.toString()}`;

    const { status, data } = await this.get(url, { headers });

    if (this.isStatusOK(status)) {
      return Route.make(
        data,
        params.startPoint,
        params.destiny,
        params.vehicle
      );
    }

    throw new Error('Ops... Algo de errado ocorreu!');
  }
}
