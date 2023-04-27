
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, Index } from "typeorm";
import { StorageFile } from "entities/storage_files";
import { Applicant } from "entities/applicants";
import { Company } from "entities/companies";

@Entity('messages')
  @Index(['reply_to_message_id'], { unique: false })
export class Message  {
  
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
  
    @Column({ nullable: true, type: "text", default: ""})
    text:string  = ""
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    attachment:StorageFile 
  
    @Column({ nullable: true, type: "integer"})
    reply_to_message_id:number 
  
    @Column({ nullable: false, type: "integer"})
    company_id:number 
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_from_applicant:boolean  = false
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_read:boolean  = false
  
    @ManyToOne(() => Applicant, (applicant) => applicant.messages, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
  
    @ManyToOne(() => Company, (company) => company.messages, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
    }
