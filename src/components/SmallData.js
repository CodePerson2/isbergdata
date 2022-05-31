import {BiTrendingUp, BiTrendingDown} from 'react-icons/bi';
import { green } from './Bigchart';

function SmallData({ border, icon, valueType, mainValue, title, percentChange, ArrowDirection, iconColor, VS_Value, bColor }) {
    return (
        <div className={`flex flex-col bg-white p-4 ${border}`}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-col mb-1.5'}>
                    <div className={'text-m font-medium mb-0.5'}>
                        {title}
                    </div>
                    <div className={'text-2xl font-semibold'}>
                        {mainValue + valueType}
                    </div>

                </div>
                <div>
                    <div className="rounded-full block p-2" style={{ color: iconColor, backgroundColor: bColor }}>
                        {icon}
                    </div>

                </div>

            </div>
            <div className={'flex flex-row justify-start content-center'}>
                <div className={'mt-0.5'} style={{ color: ArrowDirection === 'up' ? 'rgb(' + green + ')' : 'Red'}}>{ArrowDirection === 'up' ? <BiTrendingUp/> : <BiTrendingDown/>}</div>
                <div className={'text-sm font-medium ml-1 '} style={{ color: ArrowDirection === 'up' ? 'rgb(' + green + ')' : 'Red'}}>{percentChange + '%'}</div>
                <div className={'text-xs mt-0.5 ml-2 text-slate-500 font-normal opacity-60 '}>{VS_Value}</div>
            </div>
        </div>
    );
}

export default SmallData;
