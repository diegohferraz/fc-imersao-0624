import { TicketKind } from '@prisma/client';

export class ReserveSpotDto {
  spots: string[]; //['A1', 'A2'] para poder reservar varios lugares
  ticket_kind: TicketKind;
  email: string;
}
