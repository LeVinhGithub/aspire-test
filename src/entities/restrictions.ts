
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Company } from "entities/companies";
import { Applicant } from "entities/applicants";

enum ReasonEnum {
    OTHER = "Other",
    HARRASING_VANDALISM = "HarrasingVandalism",
    SELECTION_UNMATCHED = "SelectionUnmatched"
}

@Entity('restrictions')
export class Restriction  {
  
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
    company_id:number 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @Column({ nullable: false, type: "enum", enum: ["Other","HarrasingVandalism","SelectionUnmatched"], default: "Other"})
    reason:`${ReasonEnum}`  = "Other"
  
    @ManyToOne(() => Company, (company) => company.restrictions, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.restrictions, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }

export { ReasonEnum }
