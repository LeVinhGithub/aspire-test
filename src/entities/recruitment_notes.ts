
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";
import { Company } from "entities/companies";

@Entity('recruitment_notes')
export class RecruitmentNote  {
  
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
    applicant_id:number 
  
    @Column({ nullable: false, type: "integer"})
    company_id:number 
  
    @Column({ nullable: true, type: "varchar"})
    note:string 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.recruitment_notes, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
  
    @ManyToOne(() => Company, (company) => company.recruitment_notes, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
    }
