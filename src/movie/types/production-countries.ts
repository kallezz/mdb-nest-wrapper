import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionCountries {
  @Field({ nullable: true })
  iso_3166_1: string;

  @Field({ nullable: true })
  name: string;
}
