
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { IndustryGroup } from "entities/industry_groups";
import { Company } from "entities/companies";
import { ApplicantIndustry } from "entities/applicant_industries";

@Entity('industries')
export class Industry  {
  
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
  
    @Column({ nullable: false, type: "integer"})
    industry_group_id:number 
  
    @ManyToOne(() => IndustryGroup, (industry_group) => industry_group.industries, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'industry_group_id' } )
    industry_group:IndustryGroup 
  
    @OneToMany(() => Company, (company) => company.industry, { cascade: true })
@JoinColumn( { name: 'industry_id' } )
    companies:Company[] 
  
    @OneToMany(() => ApplicantIndustry, (applicant_industry) => applicant_industry.industry, { cascade: true })
@JoinColumn( { name: 'industry_id' } )
    applicant_industries:ApplicantIndustry[] 
    }
