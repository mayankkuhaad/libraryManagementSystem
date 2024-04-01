import { LibraryService } from "./library.service";
import { CreateBookDto } from "./dtos/create-book.dto";
export declare class LibraryController {
    private readonly libraryService;
    constructor(libraryService: LibraryService);
    create(dto: CreateBookDto): Promise<import("src/library/library.entity").LibraryBooks>;
    findMany(): Promise<import("src/library/library.entity").LibraryBooks[]>;
    findOne(id: number): Promise<import("src/library/library.entity").LibraryBooks[]>;
    update(id: number, dto: CreateBookDto): Promise<import("src/library/library.entity").LibraryBooks>;
    delete(id: number): Promise<import("src/library/library.entity").LibraryBooks>;
}
