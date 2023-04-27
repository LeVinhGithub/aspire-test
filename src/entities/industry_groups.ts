
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Industry } from "entities/industries";

@Entity('industry_groups')
export class IndustryGroup  {
  
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
  
    @OneToMany(() => Industry, (industry) => industry.industry_group, { cascade: true })
@JoinColumn( { name: 'industry_group_id' } )
    industries:Industry[] 
    }
