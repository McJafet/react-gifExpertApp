import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    //console.log(state);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [category])


    //getGifs();

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'> {category} </h3>

        {loading && <p className='animate__animated animate__flash>Loading'></p>}
        {/* { loading ? 'Cargando...' : 'Data Cargada' } */}

        <div className='card-grid'>
        

            {
                images.map( img => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        
        </div>
    </>
    
  )
}
