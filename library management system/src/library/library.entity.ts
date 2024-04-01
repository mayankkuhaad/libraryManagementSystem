import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'library'})
export class LibraryBooks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    
    @Column()
    status: boolean;
}