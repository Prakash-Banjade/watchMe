interface Stock {
    symbol: string,
    url: string,
    title: string,
    LTP: number,
    percentChange: number,
    open: number,
    high: number,
    low: number,
    quantity: number,
    // pClose: string,
    // diff: string
}

interface Nepse {
    index: number,
    percentageDifference: number,
    turnOver: number,
    sensitiveIndex: number
    sensitivePercentageChange: number
    floatIndex: number
    floatPercentageChange: number
    sensitiveFloatIndex: number
    sensitiveFloatPercentageChange: number
}

type Product = {
    url: string;
    title: string;
    price: number;
    priceSymbol: string;
    rating: number;
    ratingNumber: number;
    discount: string;
    images: string[];
    descriptionArray: string[];
    outOfStock: boolean;
};

type Base = {
    id: string;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
}
