import React from "react";
import hello from "../../assets/image/hello-small.png"
import stray from "../../assets/image/stray-small.png"
import fanny from "../../assets/image/fanny-small.png"
import empire from "../../assets/image/empire-small.png"

class Trending extends React.Component{
    render() {
        return <>
        <div className="xl:pt-20">
            <div className="xl:flex flex-wrap justify-center content-center xl:justify-between  py-8">
                <h1 className="text-white font-extrabold text-2xl">Currently Trending Games</h1>
                <div className="bg-purple-900 px-5 py-3 rounded-lg">
                    <button className="text-white font-semibold">SEE ALL</button>
                </div>
            </div>
            <div className="flex xl:justify-between justify-center content-center flex-wrap xl:gap-0 gap-4 py-7 w-full ">
                <Testing image={empire} rate="40"/>
                <Testing image={fanny} rate="50"/>
                <Testing image={hello} rate="80"/>
                <Testing image={stray} rate="120"/>
            </div>
        </div>
        </>
    }
}


const Testing = (props) => {
  return (
    <div>
        <div className="w-52 rounded-lg">
            <img src={props.image} alt="trending/games" />
            <div className="flex justify-center p-5">
                <i class="fa-solid fa-fire text-white text-lg"></i>
                <p className="text-white px-5 text-lg">{props.rate}</p>
                <h1 className="text-white text-lg">Followers</h1>
            </div>
        </div>
    </div>
  )
}



export default Trending