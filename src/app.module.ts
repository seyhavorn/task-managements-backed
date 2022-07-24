import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typworm.configs';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TasksModule,
  ],
})
export class AppModule {}
