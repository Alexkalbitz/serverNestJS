import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

import { ListDto } from 'dto/list.dto';
import { UserDto } from 'dto/user.dto';
import { UserEntity } from './user.entity';
import { ItemEntity } from './item.entity';
import { GroupEntity } from './group.entity';

@Entity()
export class ListEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public public: boolean;

    @Column()
    public created: string;

    @Column()
    public name: string;

    @ManyToOne(type => UserEntity, user => user.id)
    user: UserEntity; 

   @ManyToMany(type => GroupEntity, group => group.lists)
   groups: GroupEntity[]; 

   @ManyToMany(type => ItemEntity, item => item.lists)
   @JoinTable()
   items: ItemEntity[] 

    public static createFromDto(dto: ListDto): ListEntity {
        const entity = new ListEntity();
        entity.id = dto.id;
        entity.public = dto.public;
        entity.created = dto.created;
        entity.name = dto.name;
        return entity;
    }
}