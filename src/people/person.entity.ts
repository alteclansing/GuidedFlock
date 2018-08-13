import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  firstName: string;

  @Column({ length: 250 })
  lastName: string;

  @Column({ length: 250 })
  preferedName: string;

  @Column('int')
  age: number;

  @Column('date')
  birthday: string;

  @Column({length: 7})
  gender: string;

  @Column({length: 254})
  email: string;

  @Column({length: 50})
  phone: string;

  @Column()
  admin: boolean;

  @Column()
  archived: boolean;

  @Column()
  contact: boolean;

  @Column()
  volunteer: boolean;

  @Column('int')
  addressId: number;

  @Column('int')
  familyId: number;

  @Column()
  familyRelationship: string;

  @Column('date')
  dateCreated: string;

  @Column('date')
  dateModified: string;

  @Column('date')
  lastLogin: string;
}