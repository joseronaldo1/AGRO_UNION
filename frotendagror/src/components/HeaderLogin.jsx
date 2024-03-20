import LogoHeader from './../assets/icons/logoOrigi.png'


export function HeaderLogin (props) {
    return(
        <div className="bg-[#00AD00] w-full h-20 flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold justify-between ml-10">
                {props.title}
            </h2>
            <img src={LogoHeader} alt="" className='w-18 h-14' />
        </div>
    )
}