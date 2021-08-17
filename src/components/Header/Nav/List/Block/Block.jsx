import React from 'react';
import classes from './Block.module.css';

const Block = (props) => {

    let newListElement = React.createRef();

    let addList = () => {
        let text = newListElement.current.value;
        props.addList(text)
    }

    
    const CrList = (props) => {
        return (
            <div>
             {props.valueL}
            </div>
        )
    }

    let crList = props.dataList.map( lc => <CrList valueL={lc.valueL} dataList={props.dataList} />)


    return (
        <div className={classes.box}>
           <div className={classes.block}>
               {props.title}
               <textarea ref={newListElement}></textarea>
               <button onClick={addList}>add</button>
           </div>
           {crList}
        </div>
    )
}

export default Block;