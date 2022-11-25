import React, { useState, useEffect } from 'react'
import styles from '../../styles/Adslider.module.css'


function Home({ data }) {

    const { id, title, pictures } = data;

    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState(1)
    const [trans, setTrans] = useState(false)
    const [transR, setTransR] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (transR) {
            setTimeout(() => {
                setTransR(false)
            }, 100)
        }

        if (trans) {
            setTimeout(() => {
                setTrans(false)
                setIndex((index + 1) % images.length);
                setIndex1((index1 + 1) % images.length)
            }, 100)
        }
    }, [trans, transR])

    const images = pictures
    const imagesq = [
        { name: 'egypt.png' },
        { name: 'germany.png' },
        { name: 'uk.png' },
        { name: 'usa.png' },
        { name: 'south_korea.png' },
    ]

    const handlePrev = () => {
        setTransR(true)
        setTrans(false)
        const nextIndex = index - 1;
        const nextIndex1 = index1 - 1;

        if (nextIndex1 < 0) {
            setIndex1(images.length - 1);
        } else {
            setIndex1(nextIndex1)
        }

        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex)
        }


    }
    const handleNext = () => {
        setTrans(true)
        setTransR(false)
    }


    const handleImgClick = (idx) => {
        setActiveIndex(idx)
        if (idx === index) {
            return;
        }
        if (idx < index) {
            setIndex(idx)
            setIndex1(idx + 1)
            setTransR(true)
            setTrans(false)
        } else {
            setIndex((idx - 1) % images.length);
            setIndex1((idx) % images.length)
            handleNext();
        }
    }

    return (

        <>
            {images.length > 0 ?
                <>
                    <div className='relative'>
                        <button className={`text-3xl ${styles.asb_prev}`} onClick={handlePrev}>{"<"}</button>

                        <div className="flex justify-center">

                            <div className={`relative w-full overflow-hidden ${styles.asb_container}`}>
                                <img className={`absolute object-contain z-1 w-full h-full rounded-xl ${trans ? 'transition duration-500 ease-linear transform -translate-x-full' : (transR ? 'animate-slideL' : "")}`} src={images[index].value} alt="" />
                                <div className='bg-slate-300 w-full h-full'></div>
                            </div>

                        </div>
                        <button className={`text-3xl ${styles.asb_next}`} onClick={handleNext}>{">"}</button>
                    </div>


                    <div className={styles.thumb_container}>
                        <div className="flex justify-center space-x-4 mx-auto w-full" >
                            {images.map((el, idx) => {
                                return (
                                    <div key={el.id + idx + el.id}>
                                        <img onClick={() => handleImgClick(idx)} className={`w-14 h-14 border-2 p-1 rounded-md ${images[activeIndex] === images[idx] ? 'border-blue-500' : 'opacity-70'} `} src={`${el.value}`} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </>
                : "no images yet"}
        </>

    )

}

export default Home
