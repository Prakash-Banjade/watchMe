import { BaseEntity } from "src/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class AmazonProduct extends BaseEntity {
    @Column({ type: 'varchar' })
    url: string;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'real', default: 0 })
    price: number;

    @Column({ type: 'varchar', default: '$' })
    priceSymbol: string;

    @Column({ type: 'real', default: 0 })
    rating: number;

    @Column({ type: 'integer', default: 0 })
    ratingNumber: number;

    @Column({ type: 'varchar' })
    discount: string;

    @Column({ type: 'varchar' })
    image: string;

    @Column({ type: 'simple-array', default: [] })
    descriptionArray: string[];

    @Column({ type: 'boolean', default: false })
    outOfStock: boolean;
}
