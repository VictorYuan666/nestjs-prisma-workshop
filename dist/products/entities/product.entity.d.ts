import { Product, Prisma } from '@prisma/client';
export declare class ProductEntity implements Product {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string | null;
    price: Prisma.Decimal;
    sku: string;
    published: boolean;
    constructor(partial: Partial<ProductEntity>);
}
