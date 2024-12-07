import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
  imports: [PrismaModule, AuthModule],
})
export class AppModule {}
