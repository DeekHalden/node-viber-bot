import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserTable1612718423157 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
