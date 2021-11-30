import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionCompany {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  logo_path: string | null;

  @Field({ nullable: true })
  origin_country: string;
}
