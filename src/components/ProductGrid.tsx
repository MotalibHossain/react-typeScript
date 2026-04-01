import type { Product } from "../types/product";
import ProductCard from "./ProductCard";


type Props = {
    ProductInfo: Product[];
};

const ProductGrid = ({ ProductInfo }: Props) => {
    return (
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {ProductInfo.map((products) => (
                <ProductCard key={products?.id} product={products} />
            ))}
        </div>
    );
};

export default ProductGrid;
