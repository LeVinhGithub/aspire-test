
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { SchoolType } from "entities/school_types";
import { Applicant } from "entities/applicants";

@Entity('applicant_schools')
export class ApplicantSchool  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "date"})
    graduation_date:Date 
  
    @Column({ nullable: false, type: "varchar", default: ""})
    name:string  = ""
  
    @Column({ nullable: true, type: "varchar"})
    degree:string 
  
    @Column({ nullable: true, type: "varchar"})
    major:string 
  
    @Column({ nullable: false, type: "integer"})
    school_type_id:number 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @ManyToOne(() => SchoolType, (school_type) => school_type.applicant_schools, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'school_type_id' } )
    school_type:SchoolType 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.applicant_schools, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }
