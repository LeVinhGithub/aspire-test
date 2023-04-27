
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { StorageFile } from "entities/storage_files";
import { Company } from "entities/companies";

@Entity('company_employees')
export class CompanyEmployee  {
  
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
  
    @Column({ nullable: false, type: "varchar"})
    full_name:string 
  
    @Column({ nullable: true, type: "varchar"})
    profile:string 
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    photo:StorageFile 
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_high_rank_employee:boolean  = false
  
    @ManyToOne(() => Company, (company) => company.company_employees, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
    }
