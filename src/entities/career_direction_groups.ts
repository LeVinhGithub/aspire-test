
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { CareerDirection } from "entities/career_directions";

@Entity('career_direction_groups')
export class CareerDirectionGroup  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    name:string 
  
    @OneToMany(() => CareerDirection, (career_direction) => career_direction.career_direction_group, { cascade: true })
@JoinColumn( { name: 'career_direction_group_id' } )
    career_directions:CareerDirection[] 
    }
