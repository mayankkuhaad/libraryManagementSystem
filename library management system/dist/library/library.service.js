"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const library_entity_1 = require("./library.entity");
const typeorm_2 = require("typeorm");
let LibraryService = class LibraryService {
    constructor(libraryRepository) {
        this.libraryRepository = libraryRepository;
    }
    async create(dto) {
        const book = this.libraryRepository.create(dto);
        return await this.libraryRepository.save(book);
    }
    findMany() {
        return this.libraryRepository.find();
    }
    findOne(id) {
        return this.libraryRepository.find({ where: { id } });
    }
    async update(id, dto) {
        const book = await this.libraryRepository.findOne({ where: { id } });
        Object.assign(book, dto);
        return await this.libraryRepository.save(book);
    }
    async delete(id) {
        const book = await this.libraryRepository.findOne({ where: { id } });
        return await this.libraryRepository.remove(book);
    }
};
exports.LibraryService = LibraryService;
exports.LibraryService = LibraryService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(library_entity_1.LibraryBooks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LibraryService);
//# sourceMappingURL=library.service.js.map