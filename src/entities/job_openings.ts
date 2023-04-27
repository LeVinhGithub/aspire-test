
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany, Index } from "typeorm";
import { StorageFile } from "entities/storage_files";
import { OccupationType } from "entities/occupation_types";
import { Location } from "entities/locations";
import { IncomeRange } from "entities/income_ranges";
import { EmploymentStatus } from "entities/employment_statuses";
import { Company } from "entities/companies";
import { PassiveSmokingCountermeasure } from "entities/passive_smoking_countermeasures";
import { CareerDirection } from "entities/career_directions";
import { JobTitle } from "entities/job_titles";
import { JobApplication } from "entities/job_applications";
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { JobOpeningValuedCompetency } from "entities/job_opening_valued_competencies";

enum StatusEnum {
    AVAILABLE = "available",
    EXPIRED = "expired"
}

@Entity('job_openings')
  @Index(['slug'], { unique: true })
export class JobOpening  {
  
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
    department:string  = ""
  
    @Column({ nullable: false, type: "varchar"})
    position:string 
  
    @Column({ nullable: false, type: "integer"})
    occupation_type_id:number 
  
    @Column({ nullable: true, type: "integer"})
    location_id:number 
  
    @Column({ nullable: false, type: "integer"})
    income_range_id:number 
  
    @Column({ nullable: false, type: "text", default: ""})
    job_description:string  = ""
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_remote_available:boolean  = false
  
    @Column({ nullable: false, type: "integer"})
    employment_status_id:number 
  
    @Column({ nullable: false, type: "integer"})
    company_id:number 
  
    @Column({ nullable: false, type: "varchar"})
    trial_period:string 
  
    @Column({ nullable: false, type: "varchar"})
    working_hours:string 
  
    @Column({ nullable: false, type: "varchar", default: ""})
    avg_overtime_hours:string  = ""
  
    @Column({ nullable: false, type: "text", default: ""})
    trial_period_conditions:string  = ""
  
    @Column({ nullable: true, type: "varchar"})
    workplace:string 
  
    @Column({ nullable: false, type: "text", default: ""})
    qualification:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    benefits:string  = ""
  
    @Column({ nullable: false, type: "text", default: ""})
    vacation:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    bonus:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    promotion:string  = ""
  
    @Column({ nullable: true, type: "text", default: ""})
    appeal_point:string  = ""
  
    @Column({ nullable: false, type: "integer"})
    passive_smoking_countermeasure_id:number 
  
    @Column({ nullable: false, type: "integer"})
    career_direction_id:number 
  
    @Column({ nullable: false, type: "integer"})
    job_title_id:number 
  
    @Column({ nullable: true, type: "varchar", default: ""})
    future_career_path:string  = ""
  
    @Column({ nullable: true, type: "varchar"})
    trending_keywords:string 
  
    @Column({ nullable: true, type: "boolean", default: false})
    business_trip_availability:boolean  = false
  
    @Column({ nullable: true, type: "boolean", default: false})
    transfers:boolean  = false
  
    @Column({ nullable: false, type: "date"})
    publication_start_date:Date 
  
    @Column({ nullable: true, type: "date"})
    publication_end_date:Date 
  
    @Column({ nullable: false, type: "varchar", unique: true})
    slug:string 
  
    @OneToOne(() => StorageFile, { onDelete: 'CASCADE' })
@JoinColumn()
    image:StorageFile 
  
    @Column({ nullable: true, type: "boolean", default: false})
    is_recommended:boolean  = false
  
    @Column({ nullable: true, type: "enum", enum: ["available","expired"], default: "available"})
    status:`${StatusEnum}`  = "available"
  
    @Column({ nullable: true, type: "integer"})
    pv:number 
  
    @ManyToOne(() => OccupationType, (occupation_type) => occupation_type.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'occupation_type_id' } )
    occupation_type:OccupationType 
  
    @ManyToOne(() => Location, (location) => location.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'location_id' } )
    location:Location 
  
    @ManyToOne(() => IncomeRange, (income_range) => income_range.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'income_range_id' } )
    income_range:IncomeRange 
  
    @ManyToOne(() => EmploymentStatus, (employment_status) => employment_status.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'employment_status_id' } )
    employment_status:EmploymentStatus 
  
    @ManyToOne(() => Company, (company) => company.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'company_id' } )
    company:Company 
  
    @ManyToOne(() => PassiveSmokingCountermeasure, (passive_smoking_countermeasure) => passive_smoking_countermeasure.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'passive_smoking_countermeasure_id' } )
    passive_smoking_countermeasure:PassiveSmokingCountermeasure 
  
    @ManyToOne(() => CareerDirection, (career_direction) => career_direction.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'career_direction_id' } )
    career_direction:CareerDirection 
  
    @ManyToOne(() => JobTitle, (job_title) => job_title.job_openings, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'job_title_id' } )
    job_title:JobTitle 
  
    @OneToMany(() => JobApplication, (job_application) => job_application.job_opening, { cascade: true })
@JoinColumn( { name: 'job_opening_id' } )
    job_applications:JobApplication[] 
  
    @OneToMany(() => JobOpeningFavorite, (job_opening_favorite) => job_opening_favorite.job_opening, { cascade: true })
@JoinColumn( { name: 'job_opening_id' } )
    job_opening_favorites:JobOpeningFavorite[] 
  
    @OneToMany(() => JobOpeningValuedCompetency, (job_opening_valued_competency) => job_opening_valued_competency.job_opening, { cascade: true })
@JoinColumn( { name: 'job_opening_id' } )
    job_opening_valued_competencies:JobOpeningValuedCompetency[] 
    }

export { StatusEnum }
