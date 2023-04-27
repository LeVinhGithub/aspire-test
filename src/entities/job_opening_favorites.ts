
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { JobOpening } from "entities/job_openings";
import { Applicant } from "entities/applicants";

@Entity('job_opening_favorites')
export class JobOpeningFavorite  {
  
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
    applicant_id:number 
  
    @ManyToOne(() => JobOpening, (job_opening) => job_opening.job_opening_favorites, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_opening_id' } )
    job_opening:JobOpening 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.job_opening_favorites, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }
