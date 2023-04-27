
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { TargetList } from "entities/target_lists";
import { Applicant } from "entities/applicants";

@Entity('target_list_applicants')
export class TargetListApplicant  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: true, type: "integer"})
    target_list_id:number 
  
    @Column({ nullable: true, type: "integer"})
    applicant_id:number 
  
    @ManyToOne(() => TargetList, (target_list) => target_list.target_list_applicants, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'target_list_id' } )
    target_list:TargetList 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.target_list_applicants, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }
