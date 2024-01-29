import { Button } from "@nextui-org/react";

export default function Benner2() {
    return ( 
        <div className="img-text-wrapper p-2 " style={{position: 'relative', height: '500px      '}}>
            <div className="img" style={{
                background: `url("https://bizweb.dktcdn.net/100/260/640/themes/801977/assets/banner1.jpg?1676017321988") no-repeat center center`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                marginTop: '2rem',
                
            }}/>
            <div className="text-on-image" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'rgb',
                textAlign: 'center',
                
            }}>

                <h1 className="text-5xl font-bold">Khuyến mãi khủng mùa hè</h1>
               
                <p className="mt-5">Giảm đến 50% đối với nhẫn kim cương </p>
                <Button className="mt-3 bg-red-400 text-lg ">
                    <a href="">mua ngay</a>
                </Button>
                
            </div>
        </div>
     );
}
