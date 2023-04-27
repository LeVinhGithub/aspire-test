
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { JobOpening } from "entities/job_openings";

@Entity('passive_smoking_countermeasures')
export class PassiveSmokingCountermeasure  {
  
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
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.passive_smoking_countermeasure, { cascade: true })
@JoinColumn( { name: 'passive_smoking_countermeasure_id' } )
    job_openings:JobOpening[] 
    }
