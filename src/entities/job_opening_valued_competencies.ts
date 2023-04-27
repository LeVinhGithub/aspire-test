
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { JobOpening } from "entities/job_openings";
import { ValuedCompetency } from "entities/valued_competencies";

@Entity('job_opening_valued_competencies')
export class JobOpeningValuedCompetency  {
  
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
    job_opening_id:number 
  
    @Column({ nullable: false, type: "integer"})
    valued_competency_id:number 
  
    @ManyToOne(() => JobOpening, (job_opening) => job_opening.job_opening_valued_competencies, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_opening_id' } )
    job_opening:JobOpening 
  
    @ManyToOne(() => ValuedCompetency, (valued_competency) => valued_competency.job_opening_valued_competencies, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'valued_competency_id' } )
    valued_competency:ValuedCompetency 
    }
