import { Search, Loader2, AlertCircle } from "lucide-react";
import ProductGrid from "./components/ProductGrid";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import type { PaginatedResponse, Product } from "./types/product";
import Pagination from "./components/Pagination";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [PaginatedResponse, setPaginatedResponse] =
        useState<PaginatedResponse<Product> | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const ITEMS_PER_PAGE = 12;

    const fetchApiData = async () => {
        setLoading(true);
        setError(null);
        try {
            setLoading(true);
            setError(null);

            const response = await api.fetchProducts({
                page: currentPage,
                limit: ITEMS_PER_PAGE,
                category: category || undefined,
                search: search || undefined
            });

            console.log("API Response:", response);

            setPaginatedResponse(response);
            setProducts(response.data);
            setCurrentPage(response.page);
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "An error occurred while fetching products";
            setError(errorMessage);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApiData();
    }, [currentPage, category, search]);

    const handleRetry = () => {
        fetchApiData();
    };
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        setCurrentPage(1);
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div style={{ minHeight: "100vh", padding: "2rem" }}>
            {/* Header Section */}
            <header
                className="glass-panel"
                style={{ padding: "2rem", marginBottom: "2rem" }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem"
                    }}
                >
                    Premium Products
                </h1>
                <p style={{ color: "var(--text-muted)" }}>
                    Browse our collection. Handling the flaky API gracefully is
                    part of the challenge.
                </p>
            </header>

            {/* Controls Section */}
            <section
                style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}
            >
                <div
                    className="glass-panel"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 1rem",
                        flex: 1,
                        maxWidth: "400px"
                    }}
                >
                    <Search
                        size={20}
                        color="var(--text-muted)"
                        style={{ marginRight: "0.75rem" }}
                    />
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Search products..."
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "var(--text-main)",
                            outline: "none",
                            width: "100%",
                            fontSize: "1rem"
                        }}
                    />
                </div>

                <select
                    onChange={handleCategoryChange}
                    className="glass-panel"
                    style={{
                        padding: "0.75rem 1rem",
                        color: "var(--text-main)",
                        outline: "none",
                        fontSize: "1rem",
                        cursor: "pointer",
                        appearance: "none"
                    }}
                >
                    <option value="" style={{ background: "var(--surface)" }}>
                        All Categories
                    </option>
                    <option
                        value="electronics"
                        style={{ background: "var(--surface)" }}
                    >
                        Electronics
                    </option>
                    <option
                        value="clothing"
                        style={{ background: "var(--surface)" }}
                    >
                        Clothing
                    </option>
                    <option
                        value="home"
                        style={{ background: "var(--surface)" }}
                    >
                        Home
                    </option>
                    <option
                        value="outdoors"
                        style={{ background: "var(--surface)" }}
                    >
                        Outdoors
                    </option>
                </select>
            </section>

            {/* Main Grid Placeholder */}
            <main>
                <div className="max-w-[1435px] mx-auto flex flex-col items-center justify-center p-16 border border-dashed border-borderColor rounded-md">
                    {loading && (
                        <div className="flex flex-col items-center justify-center p-16 gap-4">
                            <Loader2
                                size={48}
                                className="text-blue-500 animate-spin"
                            />
                            <p className="text-gray-400 text-base">
                                Loading products...
                            </p>
                            <p className="text-gray-400 text-sm">
                                Please wait, the API can be slow (500-2500ms)
                            </p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="w-full flex flex-col items-center justify-center p-12 gap-4 border-1 border-blue-500 rounded-2xl bg-red-900 bg-opacity-5">
                            <AlertCircle size={48} className="text-blue-500" />
                            <div className="text-center">
                                <h2 className="mb-2 text-xl font-semibold">
                                    Oops! Something went wrong
                                </h2>
                                <p className="text-gray-400 mb-6">{error}</p>
                            </div>
                            <button
                                onClick={handleRetry}
                                className="px-8 py-3 bg-blue-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                                aria-label="Retry loading products"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && products.length === 0 && (
                        <div className="flex flex-col items-center justify-center p-16">
                            <h2 className="mb-2 text-xl font-semibold">
                                No products found
                            </h2>
                            <p className="text-gray-400">
                                Try adjusting your search or filters
                            </p>
                        </div>
                    )}

                    <div className="w-full max-w-[1,112px] mx-auto">
                        {!loading && !error && products.length > 0 && (
                            <ProductGrid ProductInfo={products} />
                        )}
                        {!error && products.length > 0 && (
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                paginationData={PaginatedResponse}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
