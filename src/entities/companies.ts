
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany, Index } from "typeorm";
import { StorageFile } from "entities/storage_files";
import { Industry } from "entities/industries";
import { CompanyUser } from "entities/company_users";
import { JobOpening } from "entities/job_openings";
import { Message } from "entities/messages";
import { Restriction } from "entities/restrictions";
import { CompanyEmployee } from "entities/company_employees";
import { RecruitmentNote } from "entities/recruitment_notes";
import { ScoutTemplate } from "entities/scout_templates";
import { TargetList } from "entities/target_lists";

enum ListingClassificationEnum {
    FIRST_SECTION_TOKYO_STOCK = "first_section_tokyo_stock",
    SECOND_SECTION_TOKYO_STOCK = "second_section_tokyo_stock",
    JASDAQ_STANDART = "jasdaq_standart",
    JASDAQ_GROWTH = "jasdaq_growth",
    MOTHERS = "mothers",
    UNLISTED = "unlisted"
}

@Entity('companies')
  @Index(['slug'], { unique: true })
export class Company  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    name:string 
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    logo:StorageFile 
  
    @Column({ nullable: true, type: "varchar", default: ""})
    location:string  = ""
  
    @Column({ nullable: true, type: "varchar", default: ""})
    launched_year:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    business_details:string  = ""
  
    @Column({ nullable: true, type: "integer", default: 1})
    number_of_employees:number  = 1
  
    @Column({ nullable: false, type: "integer"})
    industry_id:number 
  
    @Column({ nullable: true, type: "text", default: ""})
    mission:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    vision:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    value:string  = ""
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    representative_photo:StorageFile 
  
    @Column({ nullable: true, type: "text", default: ""})
    representative_profile:string  = ""
  
    @Column({ nullable: true, type: "enum", enum: ["first_section_tokyo_stock","second_section_tokyo_stock","jasdaq_standart","jasdaq_growth","mothers","unlisted"], default: "first_section_tokyo_stock"})
    listing_classification:`${ListingClassificationEnum}`  = "first_section_tokyo_stock"
  
    @Column({ nullable: true, type: "varchar"})
    representative_name:string 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    slug:string 
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    image:StorageFile 
  
    @Column({ nullable: true, type: "varchar"})
    capital:string 
  
    @Column({ nullable: true, type: "boolean", default: false})
    ipo:boolean  = false
  
    @Column({ nullable: true, type: "varchar"})
    business_id:string 
  
    @Column({ nullable: true, type: "varchar"})
    name_furigana:string 
  
    @ManyToOne(() => Industry, (industry) => industry.companies, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'industry_id' } )
    industry:Industry 
  
    @OneToMany(() => CompanyUser, (company_user) => company_user.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    company_users:CompanyUser[] 
  
    @OneToMany(() => JobOpening, (job_opening) => job_opening.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    job_openings:JobOpening[] 
  
    @OneToMany(() => Message, (message) => message.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    messages:Message[] 
  
    @OneToMany(() => Restriction, (restriction) => restriction.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    restrictions:Restriction[] 
  
    @OneToMany(() => CompanyEmployee, (company_employee) => company_employee.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    company_employees:CompanyEmployee[] 
  
    @OneToMany(() => RecruitmentNote, (recruitment_note) => recruitment_note.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    recruitment_notes:RecruitmentNote[] 
  
    @OneToMany(() => ScoutTemplate, (scout_template) => scout_template.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    scout_templates:ScoutTemplate[] 
  
    @OneToMany(() => TargetList, (target_list) => target_list.company, { cascade: true })
@JoinColumn( { name: 'company_id' } )
    target_lists:TargetList[] 
    }

export { ListingClassificationEnum }
