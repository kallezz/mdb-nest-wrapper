import { ObjectType, Field, Int } from '@nestjs/graphql';
import { EStatus } from '../types/status.enum';
import { Collection } from './collection.entity';
import { ProductionCompany } from '../types/production-company';
import { ProductionCountries } from '../types/production-countries';
import { SpokenLanguages } from '../types/spoken-languages';
import { Genres } from '../types/genres';

@ObjectType()
export class Movie {
  @Field({ nullable: true })
  adult: boolean;

  @Field({ nullable: true })
  backdrop_path: string | null;

  @Field(() => Collection, { nullable: true })
  belongs_to_collection: null | Collection;

  @Field({ nullable: true })
  budget: number;

  @Field(() => [Genres], { nullable: true })
  genres: Genres[];

  @Field({ nullable: true })
  homepage: string | null;

  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  imdb_id: string | null;

  @Field({ nullable: true })
  original_language: string;

  @Field({ nullable: true })
  original_title: string;

  @Field({ nullable: true })
  overview: string | null;

  @Field({ nullable: true })
  popularity: number;

  @Field({ nullable: true })
  poster_path: string | null;

  @Field(() => [ProductionCompany], { nullable: true })
  production_companies: ProductionCompany[];

  @Field(() => [ProductionCountries], { nullable: true })
  production_countries: ProductionCountries[];

  @Field({ nullable: true })
  release_date: string;

  @Field({ nullable: true })
  revenue: number;

  @Field({ nullable: true })
  runtime: number | null;

  @Field(() => [SpokenLanguages], { nullable: true })
  spoken_languages: SpokenLanguages[];

  @Field({ nullable: true })
  status: EStatus;

  @Field({ nullable: true })
  tagline: string | null;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  video: boolean;

  @Field({ nullable: true })
  vote_average: number;

  @Field({ nullable: true })
  vote_count: number;
}
