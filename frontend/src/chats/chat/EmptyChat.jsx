
import defaltImg from '../../img/deafult-chat-img.png'


const EmptyChat=()=>{
    return (
        <>
        <div className='default-chat-img'>
            <img style={{width:'100%',height:'100%'}} src={defaltImg} alt="" />
        </div>
        </>
    )
}

export default EmptyChat;