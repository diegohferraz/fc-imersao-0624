import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Isso serve para não precisar ficar importando a conexão do banco em cada um dos modulos
@Module({
  providers: [PrismaService],
  exports: [PrismaService] // Tudo que eu crio dentro do modulo, é privado por padrão, se eu quero deixar publico, tenho que declarar no exports
})
export class PrismaModule {}
