
import defaltImg from '../../img/deafult-chat-img.png'


const EmptyChat=()=>{
    return (
        <>
        <div className='default-chat-img'>
            <img style={{width:'100%',minHeight:'99vh',overflow:'hidden'}} src={defaltImg} alt="" />
        </div>
        </>
    )
}

export default EmptyChat;