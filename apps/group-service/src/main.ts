import { NestFactory } from '@nestjs/core';
import { GroupsModule } from './groups.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  /*const app = await NestFactory.create(GroupsModule);
  await app.listen(3001);*/

  const app = await NestFactory.create(GroupsModule);
  const configService = app.get(ConfigService);

  const user = configService.get('RABBITMQ_USER');
  const password = configService.get('RABBITMQ_PASS');
  const host = configService.get('RABBITMQ_HOST');
  const queue = configService.get('RABBITMQ_QUEUE');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@${host}`],
      noAck: false,
      queue: queue,
      maxConnectionAttempts: 1,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
