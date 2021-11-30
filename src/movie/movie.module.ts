import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        baseURL: 'https://api.themoviedb.org/3/',
        timeout: 5000,
        maxRedirects: 5,
        params: {
          api_key: configService.get<string>('MDB_API_KEY'),
        },
      }),
    }),
  ],
  providers: [MovieResolver, MovieService],
})
export class MovieModule {}
