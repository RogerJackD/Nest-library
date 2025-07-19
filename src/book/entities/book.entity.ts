import { Check, Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";


@Index(['title', 'author'])
@Unique(['title', 'author'])
@Check(`"page" > 0`)
@Entity({
    name: 'book'
})
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column('text', {
        nullable: false
    })
    title: string;

    @Check(`char_length(author) > 0`)
    @Column('text',{
    })
    author: string;

    @Column('int')
    page: number;
}
