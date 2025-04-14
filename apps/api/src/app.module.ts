import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { DbModule } from '@nxnestboilerplate/db';
import { CoreModule } from '@nxnestboilerplate/core';

@Module({
  imports: [CoreModule, DbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
