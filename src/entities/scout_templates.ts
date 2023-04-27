
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Company } from "entities/companies";

@Entity('scout_templates')
export class ScoutTemplate  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: true, type: "varchar"})
    title:string 
  
    @Column({ nullable: true, type: "text"})
    template_text:string 
  
    @Column({ nullable: false, type: "integer"})
    company_id:number 
  
    @ManyToOne(() => Company, (company) => company.scout_templates, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
    }
