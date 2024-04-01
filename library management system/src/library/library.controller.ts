import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LibraryService } from "./library.service";
import { CreateBookDto } from "./dtos/create-book.dto";

@Controller("books")
export class LibraryController{
    constructor(private readonly  libraryService:LibraryService){}

    @Post()
    create(@Body() dto:CreateBookDto){
        return this.libraryService.create(dto);
    }

    @Get()
    findMany(){
        return this.libraryService.findMany();
    }

    @Get(":id")
    findOne(@Param('id') id:number){
        return this.libraryService.findOne(id);
    }
    

    @Put(":id")
    update(@Param('id') id:number, @Body() dto:CreateBookDto){
        return this.libraryService.update(id, dto);
    }

    @Delete(":id")
    delete(@Param('id') id:number){
        return this.libraryService.delete(id);
    }

  
}