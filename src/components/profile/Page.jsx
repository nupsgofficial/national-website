import welcome from '../../assets/images/undraw.png'

const Page = () => {
    return ( <div className="font-poppins w-[60rem]">
        <div className="  ">
            <div className="">
                <div className="text flex items-center justify-center flex-col pb-4">
                    <h2 className='text-5xl text-primary font-semibold'>Welcome User</h2>
                    <p className='text-xl text-primary'>Membership Id: 20203930</p>
                </div>
            <div className="flex items-center justify-center ">
                <img src={welcome} alt="" className='w-3/4 '/>
            </div>
            </div>
        </div>
    </div> );
}
 
export default Page;