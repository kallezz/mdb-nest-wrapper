import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { Collection } from './entities/collection.entity';
import { AxiosResponse } from 'axios';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [Movie], { name: 'allPopularMovies' })
  async findAll() {
    const { data } = await this.movieService.findPopular();
    return;
  }

  @Query(() => Movie, { name: 'movie' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    const { data } = await this.movieService.findOne(id);
    return data;
  }

  @ResolveField(() => Collection)
  async collections(@Parent() movie: Movie): Promise<Collection> {
    const {
      belongs_to_collection: { id },
    } = movie;

    const { data } = await this.movieService.getCollection(id);

    return data;
  }
}
