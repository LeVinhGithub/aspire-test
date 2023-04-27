
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { ApplicantLanguage } from "entities/applicant_languages";

@Entity('languages')
export class Language  {
  
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
  
    @OneToMany(() => ApplicantLanguage, (applicant_language) => applicant_language.language, { cascade: true })
@JoinColumn( { name: 'language_id' } )
    applicant_languages:ApplicantLanguage[] 
    }
