import { HttpCode, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {

constructor(private prismaService: PrismaService) {

}

  create(createEventDto: CreateEventDto) { // Tem que tipar no DTO para ser possivel de usar as funções do prisma passando os valores direto
    return this.prismaService.event.create({
      data: {
        ...createEventDto,
        date: new Date(createEventDto.date)
      } // O Prisma ja sabe quais os campos deste objeto baseado na definição do schema
    })
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: { id }
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      data: {
        ...updateEventDto,
        date: new Date(updateEventDto.date)
      },
      where: { id }
    });
  }

  @HttpCode(204) // Muda o cód retornado na chamada HTTP
  remove(id: string) {
    return this.prismaService.event.delete({
      where: { id }
    });
  }
}
