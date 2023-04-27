
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Applicant } from "entities/applicants";
import { JobOpening } from "entities/job_openings";

@Entity('locations')
export class Location  {
  
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
  
    @Column({ nullable: true, type: "boolean", default: true})
    is_prefecture:boolean  = true
  
    @OneToMany(() => Applicant, (applicant) => applicant.location, { cascade: true })
@JoinColumn( { name: 'location_id' } )
    applicants:Applicant[] 
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.location, { cascade: true })
@JoinColumn( { name: 'location_id' } )
    job_openings:JobOpening[] 
    }
