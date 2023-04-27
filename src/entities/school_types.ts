
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { ApplicantSchool } from "entities/applicant_schools";

@Entity('school_types')
export class SchoolType  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar", default: ""})
    name:string  = ""
  
    @OneToMany(() => ApplicantSchool, (applicant_school) => applicant_school.school_type, { cascade: true })
@JoinColumn( { name: 'school_type_id' } )
    applicant_schools:ApplicantSchool[] 
    }
