import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { HttpService } from '@nestjs/axios';
import { Movie } from './entities/movie.entity';
import { firstValueFrom, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Collection } from './entities/collection.entity';

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  async findPopular(): Promise<AxiosResponse<Movie[]>> {
    return firstValueFrom(this.httpService.get(`movie/popular`));
  }

  async findOne(id: number): Promise<AxiosResponse<Movie>> {
    return firstValueFrom(this.httpService.get(`movie/${id}`));
  }

  async getCollection(id: number): Promise<AxiosResponse<Collection>> {
    return firstValueFrom(this.httpService.get(`collection/${id}`));
  }
}
