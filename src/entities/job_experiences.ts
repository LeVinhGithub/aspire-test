
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";
import { JobTitle } from "entities/job_titles";

@Entity('job_experiences')
export class JobExperience  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar"})
    company_name:string 
  
    @Column({ nullable: false, type: "date"})
    start_date:Date 
  
    @Column({ nullable: true, type: "date"})
    end_date:Date 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @Column({ nullable: false, type: "integer"})
    job_title_id:number 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.job_experiences, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
  
    @ManyToOne(() => JobTitle, (job_title) => job_title.job_experiences, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_title_id' } )
    job_title:JobTitle 
    }
