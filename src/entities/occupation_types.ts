
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { JobOpening } from "entities/job_openings";

@Entity('occupation_types')
export class OccupationType  {
  
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
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.occupation_type, { cascade: true })
@JoinColumn( { name: 'occupation_type_id' } )
    job_openings:JobOpening[] 
    }
