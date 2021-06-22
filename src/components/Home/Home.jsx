import React from 'react';

import style from './Home.module.scss';
import avatarMe from '../../assets/image/ava.png';
import avatarOp from '../../assets/image/ava2.jpg';
import checkMessage from '../../assets/image/checkMessage.png'
import Message from '../Action/Message/Message';


const Home = () => {

    const avaMe = {
        backgroundImage: `url(${avatarMe})`,
    }
    const avaOp = {
        backgroundImage: `url(${avatarOp})`,
    }
    const checkMess = {
        backgroundImage: `url(${checkMessage})`,
    }


    return (
        <div>
            <Message style={avaMe} text={"Hello"} isMe={true} checkMess={checkMess} isReader={true}/>
            <Message style={avaOp} checkMess={checkMess} isReader={true} text={"Hello asd afas fasddff fsa feafsadsaf wafawd asf wawds af rgfadaHello asd afas fasddff fsa feafsadsaf wafawd asf wawds af rgfadaHello asd afas fasddff fsa feafsadsaf wafawd asf wawds af rgfadaHello asd afas fasddff fsa feafsadsaf wafawd asf wawds af rgfadaHello asd afas fasddff fsa feafsadsaf wafawd asf wawds af rgfadaHello asd afas fasddff fsa feafsadsaf wafawd asf "} isMe={false}/>
        </div>
    );
};

export default Home;