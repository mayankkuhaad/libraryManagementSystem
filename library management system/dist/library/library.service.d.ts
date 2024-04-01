import { LibraryBooks } from "./library.entity";
import { Repository } from "typeorm";
import { CreateBookDto } from "./dtos/create-book.dto";
export declare class LibraryService {
    private readonly libraryRepository;
    constructor(libraryRepository: Repository<LibraryBooks>);
    create(dto: CreateBookDto): Promise<LibraryBooks>;
    findMany(): Promise<LibraryBooks[]>;
    findOne(id: number): Promise<LibraryBooks[]>;
    update(id: number, dto: CreateBookDto): Promise<LibraryBooks>;
    delete(id: number): Promise<LibraryBooks>;
}
