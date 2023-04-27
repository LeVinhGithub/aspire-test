
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";
import { JobOpening } from "entities/job_openings";

enum StatusEnum {
    INTERVIEW_ADJUSTMENT = "interview_adjustment",
    PRIMARY_INTERVIEW = "primary_interview",
    SECONDARY_INTERVIEW = "secondary_interview",
    FINAL_INTERVIEW = "final_interview",
    UNOFFICIAL_OFFER = "unofficial_offer",
    JOINING_THE_COMPANY = "joining_the_company",
    REJECTED = "rejected",
    DECLINED = "declined",
    NOT_ENTERED = "not_entered"
}

@Entity('job_applications')
export class JobApplication  {
  
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
    job_opening_id:number 
  
    @Column({ nullable: false, type: "enum", enum: ["interview_adjustment","primary_interview","secondary_interview","final_interview","unofficial_offer","joining_the_company","rejected","declined","not_entered"], default: "not_entered"})
    status:`${StatusEnum}`  = "not_entered"
  
    @Column({ nullable: true, type: "boolean", default: false})
    approached_by_scout:boolean  = false
  
    @Column({ nullable: true, type: "boolean", default: false})
    user_name_disclosed:boolean  = false
  
    @ManyToOne(() => Applicant, (applicant) => applicant.job_applications, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
  
    @ManyToOne(() => JobOpening, (job_opening) => job_opening.job_applications, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_opening_id' } )
    job_opening:JobOpening 
    }

export { StatusEnum }
