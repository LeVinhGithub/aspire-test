
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { JobOpeningValuedCompetency } from "entities/job_opening_valued_competencies";

@Entity('valued_competencies')
export class ValuedCompetency  {
  
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
  
    @OneToMany(() => JobOpeningValuedCompetency, (job_opening_valued_competency) => job_opening_valued_competency.valued_competency, { cascade: true })
@JoinColumn( { name: 'valued_competency_id' } )
    job_opening_valued_competencies:JobOpeningValuedCompetency[] 
    }
