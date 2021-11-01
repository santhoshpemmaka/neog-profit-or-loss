import React, { useState } from 'react';
import './ProfitLoss.css';
const ProfitLoss = () => {
    const [initialStock,setinitialStock] = useState();
    const [numberStocks,setnumberStocks] = useState();
    const [currentStockvalue,setcurrentStockvalue] = useState();
    const [textofStocks,settextofStocks] = useState('');
    const [fontColor, setfontColor] = useState('');
    const initialstockHandler = (e) => {
        setinitialStock(e.target.value);
    }
    const numberstockHandler = (e) => {
        setnumberStocks(e.target.value);
    }
    const currentstockHandler = (e) => {
        setcurrentStockvalue(e.target.value);
    }
    const buttonclickHandler = () => {
        const purchaseStocks = initialStock*numberStocks;
        const sellingStocks = currentStockvalue*numberStocks;
        let percentage = ((sellingStocks - purchaseStocks)/purchaseStocks)*100;
        let stockResult = sellingStocks - purchaseStocks;
        if(purchaseStocks < sellingStocks){
            console.log("reached");
            settextofStocks(`Yay!! Your Profit is ${stockResult} and profit Percentage is ${percentage}.00% ;)`);
            setfontColor('green');
        }
        else if(purchaseStocks === sellingStocks){
            settextofStocks('No pain No gain, and no gain no pain :)');
            setfontColor('white');
        }
        else{
            settextofStocks(`Whoops!! Your loss is ${stockResult} and loss Percentage is ${percentage}.00% :(`);
            setfontColor('red');
        }

    }
    return(
        <div className="main">
            <div className="leftside">
            <h2 style={{color:'white'}}>Where's my stonks?</h2>
            <input  className='input' type='number' value={initialStock} onChange={(e) => initialstockHandler(e)} placeholder="Enter Initial Price here"/>
            <br/>
            <input className='input' type='number' value={numberStocks}  onChange={(e) => numberstockHandler(e)} placeholder="Enter Number Stocks here" />
            <br/>
            <input  className='input' type="number" value={currentStockvalue} onChange={(e) => currentstockHandler(e) } placeholder="Enter Current Price here"/>
            <br/>
            <button className="btn-click" onClick={() =>buttonclickHandler()}>TELL ME!</button>
            </div>
            <div className="rightside">
                <h1 className="rightSidetext" style={{color:fontColor}}>{textofStocks}</h1>
            </div>
            
        </div>
    )
}

export default ProfitLoss;