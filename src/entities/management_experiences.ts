
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";

@Entity('management_experiences')
export class ManagementExperience  {
  
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
    name:string 
  
    @OneToMany(() => Applicant, (applicant) => applicant.management_experience, { cascade: true })
@JoinColumn( { name: 'management_experience_id' } )
    applicants:Applicant[] 
    }
