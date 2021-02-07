"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1612718423157 = void 0;
class CreateUserTable1612718423157 {
    constructor() {
        this.name = 'CreateUserTable1612718423157';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUserTable1612718423157 = CreateUserTable1612718423157;
//# sourceMappingURL=1612718423157-CreateUserTable.js.map