import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Genres {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;
}
