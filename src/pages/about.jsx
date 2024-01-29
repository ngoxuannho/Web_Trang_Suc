/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { Card } from '../pages/components/card/card';
function About() {
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
        
      
        
       
    ];
    const data1 =    [
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
        
      
        
       
    ];
    const data2 =    [
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
        
      
        
       
    ];

  return (
    <div className="px-20">
        <div>
      <div className="flex gap-24 p-2">
        <div className="flex justify-between max-w-[30%] flex-wrap">
          <div className="flex items-center justify-center p-2">
            <div className="rounded-lg bg-slate-200 p-2">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                />
                <input
                  type="button"
                  value="Search"
                  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className='p-2 flex-wrap'>
            <h1 className=' text-2xl'>Danh Mục</h1>
            <h1 href="">Danh Mục</h1>
            <h1 href="">Danh Mục</h1>
            
          </div>

        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-end">
            <h1 className="text-2xl  ">vòng đeo tay</h1>
            <span className="text-sm">(10 sản phẩm)</span>
          </div>
          <Link className='' to="">
            xem thêm
          </Link>
        </div>
      </div>
      </div>
      <div className="flex justify-center gap-6 mt-6  ">

        <div >
          <a href="">
            {' '}
            <img
              src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
              alt=" "
              className="w-60 h-60    "
            />
          </a>
        </div>
        <div>
          <a href="">
            {' '}
            <img
              src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
              alt=" "
              className="w-60 h-60    "
            />
          </a>
        </div>
        <div>
          <a href="">
            {' '}
            <img
              src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
              alt=" "
              className="w-60 h-60    "
            />
          </a>

        </div>

      </div>
      <div className='flex justify-center gap-6 '>
        {data &&
          data.map((prd) => (
            <Card key={prd.id} productName={prd.productName} price={prd.price} />
          ))}
      </div>
      <div className=" flex-wrap ">
        <div className='flex justify-center gap-6 mt-6'>
          <div >
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
          <div>
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
          <div>
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
        </div>

        <div className='flex justify-center gap-6  '>
          {data1 &&
            data1.map((prd) => (
              <Card key={prd.id} productName={prd.productName} price={prd.price} />
            ))}
        </div>

      </div>
      <div className=" flex-wrap ">
        <div className='flex justify-center gap-6 mt-6'>
          <div >
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
          <div>
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
          <div>
            <a href="">
              {' '}
              <img
                src="https://finhay.com.vn/wp-content/uploads/2021/07/nhan-vang-tay.jpg "
                alt=" "
                className="w-60 h-60    "
              />
            </a>
          </div>
        </div>

        <div className='flex justify-center gap-6  '>
          {data2 &&
            data2.map((prd) => (
              <Card key={prd.id} productName={prd.productName} price={prd.price} />
            ))}
        </div>

      </div>
      <h1 className="mt-14">home</h1>
    </div>
  );
}

export default About;
