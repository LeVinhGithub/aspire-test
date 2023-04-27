
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Language } from "entities/languages";
import { Applicant } from "entities/applicants";

enum ProficiencyEnum {
    BASIC = "Basic",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced",
    NATIVE = "Native"
}

@Entity('applicant_languages')
export class ApplicantLanguage  {
  
    @Column({ type: "integer", primary: true})
@PrimaryGeneratedColumn()
    id:number 
  
    @Column({ nullable: true, type: "timestamp"})
@CreateDateColumn()
    created_at:Date 
  
    @Column({ nullable: true, type: "timestamp"})
@UpdateDateColumn()
    updated_at:Date 
  
    @Column({ nullable: false, type: "enum", enum: ["Basic","Intermediate","Advanced","Native"], default: "Basic"})
    proficiency:`${ProficiencyEnum}`  = "Basic"
  
    @Column({ nullable: false, type: "integer"})
    language_id:number 
  
    @Column({ nullable: false, type: "integer"})
    applicant_id:number 
  
    @Column({ nullable: true, type: "varchar"})
    other_language:string 
  
    @ManyToOne(() => Language, (language) => language.applicant_languages, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'language_id' } )
    language:Language 
  
    @ManyToOne(() => Applicant, (applicant) => applicant.applicant_languages, { onDelete: 'CASCADE' })
@JoinColumn( { name: 'applicant_id' } )
    applicant:Applicant 
    }

export { ProficiencyEnum }
