import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SpokenLanguages {
  @Field({ nullable: true })
  iso_639_1: string;

  @Field({ nullable: true })
  name: string;
}
