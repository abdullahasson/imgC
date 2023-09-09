import { useEffect, useState } from "react";

export default function Control() {

    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(1);
    const [grayscale, setGrayscale] = useState(0);
    const [contrast, setContrast] = useState(1);
    const [hueRotate, setHuerotate] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [saturate, setSaturate] = useState(1);
    const [sepia, setSepia] = useState(0);
    const [invert, setInvert] = useState(0);
    const [SR, setSR] = useState();
    const [none, setNone] = useState("flex");
    const [block, setBlock] = useState("none");
    const [all, setAll] = useState("none");
    const [flex, setFlex] = useState("none");


    const values =
        `
    blur(${blur}px) 
    grayscale(${grayscale}) 
    brightness(${brightness}) 
    contrast(${contrast}) 
    hue-rotate(${hueRotate}deg)
    opacity(${opacity})
    saturate(${saturate})
    sepia(${sepia})
    invert(${invert})
    `;


    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const img = document.getElementById("Im")
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)
        img.style.display = "none"
        ctx.filter = values
        ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height)

        const dow = document.getElementById("download");

        dow.onclick = () => {
            dow.href = canvas.toDataURL();
        }
    })

    const shows = (eve) => {
        let fe = new FileReader();
        let up = eve.target
        fe.readAsDataURL(up.files[0])
        fe.onload = () => {
            setSR(fe.result)
            setNone("none")
            setBlock("block")
            setAll("all")
            setFlex("flex")
        }
    }
    
    return (
        <>
            <label className="custum-file-upload" style={{ display: none }} htmlFor="file">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                </div>
                <div className="text">
                    <span>Click to upload image</span>
                </div>
                <input type="file" onChange={(eve) => shows(eve)} id="file" />
            </label>

            <div className="container flex justify-between items-center rounded-md mt-auto" style={{ display: flex }}>
                
                <div className="bord">
                    <img className='' id="Im" src={SR} alt="" style={{ filter: values}} />
                    <canvas id="canvas"></canvas>
                </div>

                <form action="" className="flex flex-col gap-3 p-8 relative" onSubmit={(event) => {event. preventDefault()}}>

                    {/* blur */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setBlur(e.target.value)} value={blur} max={10} step={0.1} />
                        <label htmlFor="">Blur</label>
                    </div>

                    {/* Grayscale */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setGrayscale(e.target.value)} value={grayscale} max={1} step={0.1} />
                        <label htmlFor="">Grayscale</label>
                    </div>

                    {/* hue rotate */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setHuerotate(e.target.value)} value={hueRotate} max={360} step={1} />
                        <label htmlFor="">hueRotate</label>
                    </div>

                    {/* sepia */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setSepia(e.target.value)} value={sepia} max={1} step={0.1} />
                        <label htmlFor="">sepia</label>
                    </div>

                    {/* invert */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setInvert(e.target.value)} value={invert} max={1} step={0.1} />
                        <label htmlFor="">invert</label>
                    </div>

                    {/* saturate */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setSaturate(e.target.value)} value={saturate} max={3} step={0.1} />
                        <label htmlFor="">saturate</label>
                    </div>

                    {/* Contrast */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setContrast(e.target.value)} value={contrast} max={3} step={0.1} />
                        <label htmlFor="">Contrast</label>
                    </div>

                    {/* Brightness */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setBrightness(e.target.value)} value={brightness} max={3} step={0.1} />
                        <label htmlFor="">Brightness</label>
                    </div>

                    {/* Opacite */}
                    <div className="part" style={{ pointerEvents: all}}>
                        <input type="range" onChange={(e) => setOpacity(e.target.value)} value={opacity} max={1} step={0.1} />
                        <label htmlFor="">Opacite</label>
                    </div>


                    <div className="buttons p-4 flex items-center justify-center gap-3">
                        <button className="download" style={{ display: block }}><a download="image" id="download" href="">Download</a></button>
                        <button className="reset" href="" style={{ display: block }} onClick={() => {
                            setBlur(0)
                            setBrightness(1)
                            setGrayscale(0)
                            setContrast(1)
                            setHuerotate(0)
                            setOpacity(1)
                            setSaturate(1)
                            setSepia(0)
                            setInvert(0)
                        }}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}