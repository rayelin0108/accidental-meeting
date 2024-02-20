import './Description.scss';
import inputImg from '../assets/input.png';

function Description(props) {
    // 從 props 中取得 title 屬性，如果不存在就使用預設值
    const { title = '悄然偶遇，因你而生的奇蹟' } = props;
    return (
        <section id="wrap">
            <div className="pageDescription">
                <img src={inputImg} />
                <div className='topTitleText'>
                    <h3 className="title">{title}</h3>
                </div>
            </div>
            
        </section>

    );
}


export default Description;