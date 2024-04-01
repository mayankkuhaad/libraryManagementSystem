import { InjectRepository } from "@nestjs/typeorm";
import { LibraryBooks } from "./library.entity";
import { Repository } from "typeorm";
import { CreateBookDto } from "./dtos/create-book.dto";

export class LibraryService{
    constructor(@InjectRepository(LibraryBooks) private readonly libraryRepository: Repository<LibraryBooks>){
    }

  async create(dto : CreateBookDto){
        const book = this.libraryRepository.create(dto);
        return await this.libraryRepository.save(book)
    }

    findMany(){
        return this.libraryRepository.find();
    }

    findOne(id: number){
        return this.libraryRepository.find({where:{id}});
    }
    // return this.libraryRepository.find({where:{id:2}});

    async update(id: number, dto: CreateBookDto){
        const book = await this.libraryRepository.findOne({where: {id}});

        Object.assign(book, dto);
        return await this.libraryRepository.save(book);
    }

    async delete(id: number){
        const book = await this.libraryRepository.findOne({where: {id}});
        return await this.libraryRepository.remove(book);
    }
}