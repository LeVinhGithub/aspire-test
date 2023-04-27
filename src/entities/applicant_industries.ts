
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Industry } from "entities/industries";
import { Applicant } from "entities/applicants";

@Entity('applicant_industries')
export class ApplicantIndustry  {
  
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
    industry_id:number 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @ManyToOne(() => Industry, (industry) => industry.applicant_industries, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'industry_id' } )
    industry:Industry 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.applicant_industries, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }
