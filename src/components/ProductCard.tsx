import { useState } from "react";
import type { Product } from "../types/product";

type Props = {
    product: Product;
};

const ProductCard: React.FC<Props> = ({ product }: Props) => {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="relative group w-[209.6px] h-[332px] rounded-[8px] overflow-hidden flex flex-col gap-[2px] bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.11)] transition-shadow duration-200">
            <div className="relative w-full h-[210px] flex-shrink-0 overflow-hidden bg-gray-100 rounded-tl-[6px] rounded-tr-[6px] rounded-br-[4px] rounded-bl-[4px]">
                <img
                    src={product.imageUrl || "https://via.placeholder.com/210"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />

                {/* Discount Badge - Top Left */}
                <div className="absolute top-0 left-0 flex items-center h-[24px]">
                    <div className="flex items-center w-[53px] h-[24px] gap-[3px] rounded-tl-[4px] py-[4px] pr-[6px] pl-[8px] opacity-100 bg-gradient-to-b from-[#FFA03B] to-[#F27D00]">
                        <span className="text-white text-[12px] font-medium leading-[16px]">
                            ৳ 200
                        </span>
                    </div>
                    <div className="w-[12px] h-[24px]">
                        <div
                            className="w-full h-full bg-gradient-to-b from-[#FFA03B] to-[#F27D00]"
                            style={{
                                clipPath:"polygon(100% 0, 0 51%, 100% 100%, 0 100%, 0 1%)",
                            }}
                        />
                    </div>
                </div>

                <button className="absolute top-[8px] right-[8px] w-[32px] h-[32px] flex items-center justify-center bg-white/30 backdrop-blur-[8px] rounded-full border border-white/30 hover:bg-white/50 transition-colors z-20">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 14L7.05 13.15C3.4 9.86 1 7.72 1 5.1C1 3.16 2.5 1.66 4.44 1.66C5.53 1.66 6.58 2.14 7.3 2.94C8.02 2.14 9.07 1.66 10.16 1.66C12.1 1.66 13.6 3.16 13.6 5.1C13.6 7.72 11.2 9.86 7.55 13.15L8 14Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.19] transition-colors duration-200 rounded-tl-[6px] rounded-tr-[6px] rounded-br-[4px] rounded-bl-[4px]" />

                {/* Action Items */}
                <div className="Btns absolute bottom-[12px] left-[12px] w-[186px] h-[72px] flex flex-col gap-2">
                    <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col gap-[8px] z-20">
                        {quantity === 0 ? (
                            <button
                                onClick={() => setQuantity(1)}
                                className="w-full h-[32px] flex items-center justify-center gap-[4px] pl-[12px] pr-[16px] py-[6px] bg-white/30 backdrop-blur-[8px] rounded-[6px] border-[1.5px] border-white/30 hover:bg-white/50 transition-colors"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 3V13M3 8H13"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span
                                    className="text-white text-[14px] font-[475] leading-[18px]"
                                    style={{ fontFamily: "Murecho" }}
                                >
                                    Add to Cart
                                </span>
                            </button>
                        ) : (
                            /* Quantity Controls - Bins layout */
                            <div className="w-full h-[32px] flex items-center gap-[10px]">
                                {/* Remove Btn */}
                                <button
                                    onClick={() =>
                                        setQuantity(Math.max(0, quantity - 1))
                                    }
                                    className="w-[32px] h-[32px] flex items-center justify-center bg-white/30 backdrop-blur-[8px] rounded-[6px] border-[1.5px] border-white/30 hover:bg-white/50 transition-colors"
                                >
                                    {quantity === 1 ? (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 4H13V5H12V14C12 14.55 11.55 15 11 15H5C4.45 15 4 14.55 4 14V5H3V4ZM5 5V14H11V5H5ZM6 2H10V3H6V2Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 8H13"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </button>

                                {/* Quantity Display */}
                                <span className="text-white text-[14px] font-[475] leading-[18px] min-w-[20px] text-center">
                                    {quantity}
                                </span>

                                {/* Add Btn */}
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-[32px] h-[32px] flex items-center justify-center bg-white/30 backdrop-blur-[8px] rounded-[6px] border-[1.5px] border-white/30 hover:bg-white/50 transition-colors"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 3V13M3 8H13"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    <button className="relative w-full h-[32px] flex items-center justify-center gap-[4px] pl-[12px] pr-[16px] py-[6px] bg-white/30 backdrop-blur-[8px] rounded-[6px] border-[1.5px] border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/50 z-20">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3C4.5 3 1.73 5.61 1 9C1.73 12.39 4.5 15 8 15C11.5 15 14.27 12.39 15 9C14.27 5.61 11.5 3 8 3ZM8 13C6.34 13 5 11.66 5 10C5 8.34 6.34 7 8 7C9.66 7 11 8.34 11 10C11 11.66 9.66 13 8 13ZM8 8.5C7.17 8.5 6.5 9.17 6.5 10C6.5 10.83 7.17 11.5 8 11.5C8.83 11.5 9.5 10.83 9.5 10C9.5 9.17 8.83 8.5 8 8.5Z"
                                fill="white"
                            />
                        </svg>
                        <span
                            className="text-white text-[14px] font-[475] leading-[18px]"
                            style={{ fontFamily: "Murecho" }}
                        >
                            Quick View
                        </span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col w-full min-h-[118px] p-[8px] gap-[8px]">
                <div className="flex flex-col w-full gap-[2px]">
                    <p
                        className="w-full h-[20px] text-[14px] font-normal leading-[20px]"
                        style={{ fontFamily: "Murecho", color: "#5A6573" }}
                    >
                        {product.category}
                    </p>

                    <h3
                        className="w-full h-[44px] text-[16px] leading-[22px] line-clamp-2"
                        style={{
                            fontFamily: "Murecho",
                            fontWeight: 525,
                            color: "#1A2B3D",
                        }}
                    >
                        {product.name}
                    </h3>
                </div>

                <div className="flex flex-row items-center w-full h-[28px] gap-[8px]">
                    <div className="flex flex-row items-center gap-[3px]">
                        <span
                            className="text-[20px] leading-[22px] text-right"
                            style={{
                                fontFamily: "Murecho",
                                fontWeight: 525,
                                color: "#1882FF",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            ৳
                        </span>
                        <span
                            className="text-[20px] leading-[22px] text-right"
                            style={{
                                fontFamily: "Murecho",
                                fontWeight: 475,
                                color: "#1882FF",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {product.price?.toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
