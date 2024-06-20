import { IProduct, IProductActions } from "./interfaces";

class ProductList implements IProductActions {
    private productList: IProduct[] = []
    id: number = 1;

    createProduct(data: { name: string; price: number; }): IProduct {
        const newProduct: IProduct = {
            id: this.id++,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date(),

        }
        this.productList.push(newProduct);
        return newProduct;
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number) {
        return this.productList.find(product => product.id === id);
    }

    updateProduct(id: number, data: { name?: string; price?: number }): IProduct[] {

        const productIndex = this.productList.findIndex(product => product.id === id);

        const productToUpdate = this.productList[productIndex];

        if (data.name !== undefined) {
            productToUpdate.name = data.name;
        }

        if (data.price !== undefined) {
            productToUpdate.price = data.price;
        }

        productToUpdate.updatedAt = new Date();

        this.productList[productIndex] = productToUpdate;

        return productToUpdate;
    }

    deleteProduct(id: number): { message: string; } {
        const productToDeleteIndex = this.productList.findIndex(product => product.id === id);

        this.productList.splice(productToDeleteIndex, 1);

        return { message: "Product successfully deleted." }
    }
}

export const productList = new ProductList();