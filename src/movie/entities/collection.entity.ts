import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Collection {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  poster_path: string;

  @Field({ nullable: true })
  backdrop_path: string;
}
