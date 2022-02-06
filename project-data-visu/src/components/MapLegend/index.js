import './styles.css';

export default function MapLegend(){
        return(
            <div className='legend'>
                <div className='title-legend'>
                    <b><p>Color Values</p></b>
                </div>
                <div className='heat-colors'>
                    <div className='color-0'>
                        <div className='bg-color-0'>
                            '
                        </div>
                        <p>4</p>
                    </div>
                    <div className='color-1'>
                        <div className='bg-color-1'>
                            '
                        </div>
                        <p>5 - 7</p>
                    </div>
                    <div className='color-2'>
                        <div className='bg-color-2'>
                            '
                        </div>
                        <p>8 - 14</p>
                     </div>   
                    <div className='color-3'>
                        <div className='bg-color-3'>
                            '
                        </div>
                        <p>15</p>
                    </div>
                    <div className='color-null'>
                        <div className='bg-color-null'>
                            '
                        </div>
                        <p className='text-style'>Sem dados</p>
                    </div>
                </div>
            </div>
        );
}