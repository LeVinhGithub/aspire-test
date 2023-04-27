
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";
import { JobOpening } from "entities/job_openings";

@Entity('income_ranges')
export class IncomeRange  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar", default: "", unique: true})
    name:string  = ""
  
    @OneToMany(() => Applicant, (applicant) => applicant.income_range, { cascade: true })
@JoinColumn( { name: 'income_range_id' } )
    applicants:Applicant[] 
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.income_range, { cascade: true })
@JoinColumn( { name: 'income_range_id' } )
    job_openings:JobOpening[] 
    }
