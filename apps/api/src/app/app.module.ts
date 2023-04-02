import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { GithubModule } from '../github/github.module'
import { AppService } from './app.service'

@Module({
  imports: [GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
