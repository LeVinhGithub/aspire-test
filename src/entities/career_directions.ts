
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { CareerDirectionGroup } from "entities/career_direction_groups";
import { JobOpening } from "entities/job_openings";

@Entity('career_directions')
export class CareerDirection  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "integer"})
    career_direction_group_id:number 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    name:string 
  
    @ManyToOne(() => CareerDirectionGroup, (career_direction_group) => career_direction_group.career_directions, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'career_direction_group_id' } )
    career_direction_group:CareerDirectionGroup 
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.career_direction, { cascade: true })
@JoinColumn( { name: 'career_direction_id' } )
    job_openings:JobOpening[] 
    }
