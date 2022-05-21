import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }

  create(CreateTableDto: CreateTableDto) {
    return 'Criar uma mesa: ' + JSON.stringify(CreateTableDto);
  }
}
