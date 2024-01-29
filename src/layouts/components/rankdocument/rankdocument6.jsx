import { Card } from '../../../components/card/card';
export default function Rankdocument6() {
    const data = [
        {
            id: 1,
            productName: 'Nhẫn kim cương',
            price: 1000,
        },
        {
            id: 2,
            productName: 'Nhẫn kim cương 2',
            price: 2000,
            
        },
        {
            id: 3,
            productName: 'Nhẫn kim cương 3',
            price: 2400,
        },
        {
            id: 4,
            productName: 'Nhẫn kim cương 4',
            price: 2400 ,
        },
      
        
       
    ];
    return (
        <div className="flex justify-center gap-6  ">
            {/* <span className="w-60 h-28 bg-slate-200">
                <p className="flex justify-center mt-5">Vòng Tay Bạch Kim</p>

                <p className="flex justify-center text-red-500 mt-2 font-semibold gap-2">
                    <a href="*">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </a>
                    500.000₫
                </p>
            </span>
            <span className="w-60 h-28 bg-slate-200">
                <p className="flex justify-center mt-5">Vòng Tay Tình Nhân</p>
                <p className="flex justify-center text-red-500 mt-2 font-semibold gap-2">
                    <a href="*">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </a>
                    999.999₫
                </p>
            </span>
            <span className="w-60 h-28 bg-slate-200">
                <p className="flex justify-center mt-5">Bông Tai Phá Cách</p>

                <p className="flex justify-center text-red-500 mt-2 font-semibold gap-2 ">
                    <a href="*">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </a>
                    350.000₫ <h1 className="font-light text-slate-500 price ">500.000₫</h1>
                </p>
            </span>
            <span className="w-60 h-28 bg-slate-200">
                <p className="flex justify-center mt-5">Nhẫn Vòng Basic</p>
                <p className="flex justify-center text-red-500 mt-2 font-semibold gap-2">
                    <a href="*">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-black"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </a>
                    700.000₫
                </p>
            </span> */}
             {data &&
            data.map((prd) => (
                <Card key={prd.id} productName={prd.productName} price={prd.price} />
            ))}
        </div>
    );
}
