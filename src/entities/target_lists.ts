
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Company } from "entities/companies";
import { TargetListApplicant } from "entities/target_list_applicants";

@Entity('target_lists')
export class TargetList  {
  
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
    title:string  = ""
  
    @Column({ nullable: false, type: "integer"})
    company_id:number 
  
    @ManyToOne(() => Company, (company) => company.target_lists, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
  
    @OneToMany(() => TargetListApplicant, (target_list_applicant) => target_list_applicant.target_list, { cascade: true })
@JoinColumn( { name: 'target_list_id' } )
    target_list_applicants:TargetListApplicant[] 
    }
