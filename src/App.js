import './App.css';
import SmallData from './components/SmallData.js';
import BigChart from './components/Bigchart';
import { HiFire, HiUserAdd } from 'react-icons/hi';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';


function App() {
  return (
    <div className="flex flex-col bg-gray-200  min-w-full p-10 font-sans">
      <div className="grid grid-cols-2 gap-0.5 m-auto w-[500px] mb-5 bg-slate-100 rounded overflow-hidden drop-shadow">
        <SmallData border={'rounded-tl-lg'} icon={<HiUserAdd />} iconColor={'red'} valueType={'K'} mainValue={1.39} title={'New Users'} percentChange={147} ArrowDirection={'up'} VS_Value={'VS PREV. 28 DAYS'} bColor={'rgba(242, 87, 98, 0.2)'} />
        <SmallData border={'rounded-tr-lg'} icon={<AiFillStar />} iconColor={'green'} valueType={'K'} mainValue={1.52} title={'Unique Users'} percentChange={53} ArrowDirection={'up'} VS_Value={'VS PREV. 28 DAYS'} bColor={'rgba(84, 199, 56, 0.2)'} />
        <SmallData border={'rounded-bl-lg'} icon={<HiFire />} iconColor={'blue'} valueType={'%'} mainValue={4.53} title={'Week 1 Retention'} percentChange={10.7} ArrowDirection={'down'} VS_Value={'VS PREV. 28 DAYS'} bColor={'rgba(87, 116, 222, 0.2)'} />
        <SmallData border={'rounded-br-lg'} icon={<AiFillClockCircle />} iconColor={'orange'} valueType={' sec'} mainValue={0.9} title={'Session'} percentChange={29} ArrowDirection={'up'} VS_Value={'VS PREV. 28 DAYS'} bColor={'rgba(242, 219, 87, 0.3)'} />
      </div>
      <div className='text-gray-500 text-lg max-w-lg m-auto min-w-[500px] drop-shadow'>
        <BigChart />
      </div>

    </div>
  );
}

export default App;
