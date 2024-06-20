
export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductActions {
    createProduct(param: {name: string, price: number}): IProduct;

    getProducts(): IProduct[];

    getOneProduct(id: number): IProduct[] | null;

    updateProduct(id: number, param: {name?: string; price?: number}) : IProduct[];  

    deleteProduct(id: number): { message: string };
}