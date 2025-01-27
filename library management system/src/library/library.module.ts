import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LibraryBooks } from "./library.entity";
import { LibraryController } from "./library.controller";
import { LibraryService } from "./library.service";

@Module({
    imports:[TypeOrmModule.forFeature([LibraryBooks])],
    controllers:[LibraryController],
    providers:[LibraryService]
})
export class LibraryModule{}